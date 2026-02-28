const express = require('express')
const bcrypt = require('bcryptjs')
const pool = require('../config/db')
const { authMiddleware, requireRole } = require('../middleware/auth')
const router = express.Router()

// GET /api/users  – admin only
router.get('/', authMiddleware, requireRole('admin'), async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, username, email, name, role, is_active, created_at FROM users ORDER BY created_at DESC'
        )
        res.json(rows)
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
})

// POST /api/users  – admin creates a new user
router.post('/', authMiddleware, requireRole('admin'), async (req, res) => {
    const { username, email, password, name, role } = req.body
    if (!username || !email || !password || !name || !role) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const validRoles = ['admin', 'content_creator', 'marketing']
    if (!validRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role' })
    }
    try {
        const hashed = await bcrypt.hash(password, 12)
        const [result] = await pool.query(
            'INSERT INTO users (username, email, password, name, role) VALUES (?,?,?,?,?)',
            [username, email, hashed, name, role]
        )
        res.status(201).json({ message: 'User created', id: result.insertId })
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Username or email already exists' })
        }
        res.status(500).json({ message: 'Server error' })
    }
})

// PATCH /api/users/:id/status  – toggle active/inactive
router.patch('/:id/status', authMiddleware, requireRole('admin'), async (req, res) => {
    const { is_active } = req.body
    try {
        await pool.query('UPDATE users SET is_active = ? WHERE id = ?', [is_active ? 1 : 0, req.params.id])
        res.json({ message: 'Status updated' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/users/:id
router.delete('/:id', authMiddleware, requireRole('admin'), async (req, res) => {
    if (parseInt(req.params.id) === req.user.id) {
        return res.status(400).json({ message: 'Cannot delete your own account' })
    }
    try {
        await pool.query('DELETE FROM users WHERE id = ?', [req.params.id])
        res.json({ message: 'User deleted' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
