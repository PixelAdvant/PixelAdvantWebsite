// Run: node database/setup.js
// Seeds the database with 3 initial users and sample jobs
require('dotenv').config()
const bcrypt = require('bcryptjs')
const { Client } = require('pg')
const fs = require('fs')
const path = require('path')

async function setup() {
    let conn
    try {
        // Connect without DB first to create it
        conn = new Client({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'postgres'  // Connect to default postgres database
        })

        await conn.connect()
        console.log('✓ Connected to PostgreSQL')

        // Create database if it doesn't exist
        try {
            await conn.query(`CREATE DATABASE ${process.env.DB_NAME};`)
            console.log(`✓ Database ${process.env.DB_NAME} created`)
        } catch (err) {
            if (err.code !== 'DUPLICATE_DATABASE') {
                console.log(`✓ Database ${process.env.DB_NAME} already exists`)
            }
        }

        // Close connection to default db and connect to actual db
        await conn.end()
        conn = new Client({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        await conn.connect()

        // Run schema - PostgreSQL format
        const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')
        // Split schema by semicolons and execute each statement
        const statements = schema.split(';').filter(s => s.trim().length > 0)
        for (const statement of statements) {
            try {
                await conn.query(statement)
            } catch (err) {
                // Ignore duplicate table errors
                if (!err.message.includes('already exists')) {
                    console.error('Schema error:', err.message)
                }
            }
        }
        console.log('✓ Schema applied')

        // Seed users
        const salt = await bcrypt.genSalt(12)
        const users = [
            {
                username: 'admin',
                email: 'admin@pixeladvant.com',
                password: await bcrypt.hash('Admin@2025!', salt),
                name: 'Admin User',
                role: 'admin'
            },
            {
                username: 'content_creator',
                email: 'creator@pixeladvant.com',
                password: await bcrypt.hash('Creator@2025!', salt),
                name: 'Content Creator',
                role: 'content_creator'
            },
            {
                username: 'marketing',
                email: 'marketing@pixeladvant.com',
                password: await bcrypt.hash('Marketing@2025!', salt),
                name: 'Marketing Manager',
                role: 'marketing'
            }
        ]

        for (const u of users) {
            try {
                await conn.query(
                    `INSERT INTO users (username, email, password, name, role) VALUES ($1, $2, $3, $4, $5)
                     ON CONFLICT (username) DO NOTHING`,
                    [u.username, u.email, u.password, u.name, u.role]
                )
            } catch (err) {
                // Ignore unique constraint errors
                if (!err.message.includes('unique')) {
                    console.error('User seed error:', err.message)
                }
            }
        }
        console.log('✓ Users seeded')

        // Seed sample jobs (created by admin id=1)
        const jobs = [
            ['GCC Setup Consultant', 'Consulting', 'Bangalore / Remote', 'Full-time', '5-8 years', 'Lead end-to-end GCC setup engagements for multinational clients.', '₹20-30 LPA'],
            ['Talent Acquisition Specialist', 'HR', 'Hyderabad', 'Full-time', '3-5 years', 'Source and recruit top-tier talent for GCC operations across India.', '₹12-18 LPA'],
            ['AI Recruitment Analyst', 'Technology', 'Remote', 'Full-time', '2-4 years', 'Build and optimize AI-powered recruitment pipelines and analytics.', '₹15-22 LPA'],
        ]
        for (const [title, dept, loc, type, exp, desc, salary] of jobs) {
            try {
                await conn.query(
                    `INSERT INTO jobs (title, department, location, type, experience, description, salary_range, created_by) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, 1)
                     ON CONFLICT DO NOTHING`,
                    [title, dept, loc, type, exp, desc, salary]
                )
            } catch (err) {
                // Ignore errors
                console.log('Job seed skipped:', title)
            }
        }
        console.log('✓ Sample jobs seeded')

        console.log('\n🎉 Database setup complete!\n')
        console.log('Credentials:')
        console.log('  admin          / Admin@2025!')
        console.log('  content_creator / Creator@2025!')
        console.log('  marketing      / Marketing@2025!')

    } catch (err) {
        console.error('✗ Setup failed:', err.message)
        process.exit(1)
    } finally {
        if (conn) await conn.end()
    }
}

setup()
