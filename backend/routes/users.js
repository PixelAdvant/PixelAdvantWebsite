const express = require('express')
const bcrypt = require('bcryptjs')
const pool = require('../config/db')
const { authMiddleware, requireRole } = require('../middleware/auth')
const router = express.Router()

// GET /api/users  – admin only
router.get('/', authMiddleware, requireRole('admin'), async (req, res) => {
    try {
        const { rows } = await pool.query(
            'SELECT id, username, email, name, role, is_active, created_at FROM users ORDER BY created_at DESC'
        )
        res.json(rows)
    } catch (err) {
        console.error('Get users error:', err)
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
        const result = await pool.query(
            'INSERT INTO users (username, email, password, name, role) VALUES ($1,$2,$3,$4,$5) RETURNING id',
            [username, email, hashed, name, role]
        )
        res.status(201).json({ message: 'User created', id: result.rows[0].id })
    } catch (err) {
        if (err.code === '23505') {
            return res.status(409).json({ message: 'Username or email already exists' })
        }
        console.error('Create user error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// PATCH /api/users/:id/status  – toggle active/inactive
router.patch('/:id/status', authMiddleware, requireRole('admin'), async (req, res) => {
    const { is_active } = req.body
    try {
        await pool.query(
            'UPDATE users SET is_active = $1 WHERE id = $2',
            [is_active, req.params.id]
        )
        res.json({ message: 'Status updated' })
    } catch (err) {
        console.error('Update user status error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/users/:id
router.delete('/:id', authMiddleware, requireRole('admin'), async (req, res) => {
    if (parseInt(req.params.id) === req.user.id) {
        return res.status(400).json({ message: 'Cannot delete your own account' })
    }
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [req.params.id])
        res.json({ message: 'User deleted' })
    } catch (err) {
        console.error('Delete user error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
