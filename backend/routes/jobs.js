const express = require('express')
const pool = require('../config/db')
const { authMiddleware, requireRole } = require('../middleware/auth')
const router = express.Router()

// GET /api/jobs (public – for the careers page)
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT j.*, u.name AS created_by_name
             FROM jobs j
             LEFT JOIN users u ON j.created_by = u.id
             WHERE j.is_active = 1
             ORDER BY j.created_at DESC`
        )
        res.json(rows)
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/jobs/all  – admin: all jobs including inactive
router.get('/all', authMiddleware, requireRole('admin'), async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT j.*, u.name AS created_by_name
             FROM jobs j LEFT JOIN users u ON j.created_by = u.id
             ORDER BY j.created_at DESC`
        )
        res.json(rows)
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// POST /api/jobs  – admin creates job
router.post('/', authMiddleware, requireRole('admin'), async (req, res) => {
    const { title, department, location, type, experience, description, requirements, salary_range } = req.body
    if (!title) return res.status(400).json({ message: 'Title is required' })
    try {
        const [result] = await pool.query(
            `INSERT INTO jobs (title, department, location, type, experience, description, requirements, salary_range, created_by)
             VALUES (?,?,?,?,?,?,?,?,?)`,
            [title, department, location, type || 'Full-time', experience, description, requirements, salary_range, req.user.id]
        )
        res.status(201).json({ message: 'Job created', id: result.insertId })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// PUT /api/jobs/:id
router.put('/:id', authMiddleware, requireRole('admin'), async (req, res) => {
    const { title, department, location, type, experience, description, requirements, salary_range, is_active } = req.body
    try {
        await pool.query(
            `UPDATE jobs SET title=?, department=?, location=?, type=?, experience=?,
             description=?, requirements=?, salary_range=?, is_active=? WHERE id=?`,
            [title, department, location, type, experience, description, requirements, salary_range, is_active ? 1 : 0, req.params.id]
        )
        res.json({ message: 'Job updated' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/jobs/:id
router.delete('/:id', authMiddleware, requireRole('admin'), async (req, res) => {
    try {
        await pool.query('DELETE FROM jobs WHERE id = ?', [req.params.id])
        res.json({ message: 'Job deleted' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// POST /api/jobs/:id/apply  – public job application
router.post('/:id/apply', async (req, res) => {
    const { full_name, email, phone, experience, linkedin, cover_letter } = req.body
    if (!full_name || !email) return res.status(400).json({ message: 'Name and email are required' })
    try {
        await pool.query(
            `INSERT INTO job_applications (job_id, full_name, email, phone, experience, linkedin, cover_letter)
             VALUES (?,?,?,?,?,?,?)`,
            [req.params.id, full_name, email, phone, experience, linkedin, cover_letter]
        )
        res.status(201).json({ message: 'Application submitted successfully' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/jobs/applications  – admin: view all applications
router.get('/applications', authMiddleware, requireRole('admin'), async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT a.*, j.title AS job_title FROM job_applications a
             LEFT JOIN jobs j ON a.job_id = j.id
             ORDER BY a.applied_at DESC`
        )
        res.json(rows)
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
