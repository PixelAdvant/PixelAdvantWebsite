const { Pool } = require('pg')

const pool = new Pool({
    host:     process.env.DB_HOST     || 'localhost',
    port:     parseInt(process.env.DB_PORT || '5432'),
    user:     process.env.DB_USER     || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME     || 'pixeladvant_db'
})

// Test connection on startup
pool.connect()
    .then(conn => {
        console.log('✓ PostgreSQL connected:', process.env.DB_NAME)
        conn.release()
    })
    .catch(err => {
        console.error('✗ PostgreSQL connection failed:', err.message)
        process.exit(1)
    })

module.exports = pool
