// Run: node database/setup.js
// Seeds the database with 3 initial users and sample jobs
require('dotenv').config()
const bcrypt = require('bcryptjs')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')

async function setup() {
    let conn
    try {
        // Connect without DB first to create it
        conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            multipleStatements: true
        })

        console.log('✓ Connected to MySQL')

        // Run schema
        const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')
        await conn.query(schema)
        console.log('✓ Schema applied')

        await conn.query(`USE ${process.env.DB_NAME}`)

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
            await conn.query(
                `INSERT IGNORE INTO users (username, email, password, name, role) VALUES (?,?,?,?,?)`,
                [u.username, u.email, u.password, u.name, u.role]
            )
        }
        console.log('✓ Users seeded')

        // Seed sample jobs (created by admin id=1)
        const jobs = [
            ['GCC Setup Consultant', 'Consulting', 'Bangalore / Remote', 'Full-time', '5-8 years', 'Lead end-to-end GCC setup engagements for multinational clients.', '₹20-30 LPA'],
            ['Talent Acquisition Specialist', 'HR', 'Hyderabad', 'Full-time', '3-5 years', 'Source and recruit top-tier talent for GCC operations across India.', '₹12-18 LPA'],
            ['AI Recruitment Analyst', 'Technology', 'Remote', 'Full-time', '2-4 years', 'Build and optimize AI-powered recruitment pipelines and analytics.', '₹15-22 LPA'],
        ]
        for (const [title, dept, loc, type, exp, desc, salary] of jobs) {
            await conn.query(
                `INSERT IGNORE INTO jobs (title, department, location, type, experience, description, salary_range, created_by) VALUES (?,?,?,?,?,?,?,1)`,
                [title, dept, loc, type, exp, desc, salary]
            )
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
