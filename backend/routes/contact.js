const express = require('express')
const pool = require('../config/db')
const { authMiddleware, requireRole } = require('../middleware/auth')
const router = express.Router()

// POST /api/contact  – public form submission
router.post('/', async (req, res) => {
    const { name, email, phone, company, subject, message } = req.body
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' })
    }
    try {
        await pool.query(
            `INSERT INTO contact_submissions (name, email, phone, company, subject, message)
             VALUES (?,?,?,?,?,?)`,
            [name, email, phone, company, subject, message]
        )
        res.status(201).json({ message: 'Message received. We will get back to you soon.' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/contact  – admin views all submissions
router.get('/', authMiddleware, requireRole('admin', 'marketing'), async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM contact_submissions ORDER BY submitted_at DESC'
        )
        res.json(rows)
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// PATCH /api/contact/:id/read  – mark as read
router.patch('/:id/read', authMiddleware, requireRole('admin', 'marketing'), async (req, res) => {
    try {
        await pool.query('UPDATE contact_submissions SET is_read = 1 WHERE id = ?', [req.params.id])
        res.json({ message: 'Marked as read' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
