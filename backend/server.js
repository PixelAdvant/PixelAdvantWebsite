require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ────────────────────────────────────────────────
app.use(cors({
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:3000'
    ],
    credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Rate limit: 100 requests per 15 min per IP
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { message: 'Too many requests, please try again later.' }
}))

// Stricter limit on auth routes
app.use('/api/auth', rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: { message: 'Too many login attempts, please try again later.' }
}))

// ── Routes ────────────────────────────────────────────────────
app.use('/api/auth',    require('./routes/auth'))
app.use('/api/users',   require('./routes/users'))
app.use('/api/jobs',    require('./routes/jobs'))
app.use('/api/blogs',   require('./routes/blogs'))
app.use('/api/contact', require('./routes/contact'))

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' })
})

// Error handler
app.use((err, req, res, _next) => {
    console.error('Unhandled error:', err)
    res.status(500).json({ message: 'Internal server error' })
})

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n🚀 PixelAdvant API running on port ${PORT}`)
    console.log(`   http://localhost:${PORT}/api/health\n`)
    // Call DB pool to test connection
    require('./config/db')
})
