const express = require('express')
const pool = require('../config/db')
const { authMiddleware, requireRole } = require('../middleware/auth')
const router = express.Router()

// GET /api/blogs (public)
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT b.id, b.title, b.slug, b.excerpt, b.image_url, b.category,
                    b.views, b.created_at, u.name AS author_name
             FROM blog_posts b
             LEFT JOIN users u ON b.author_id = u.id
             WHERE b.status = 'published'
             ORDER BY b.created_at DESC`
        )
        res.json(rows)
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/blogs/all  – content_creator and admin see all
router.get('/all', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT b.*, u.name AS author_name FROM blog_posts b
             LEFT JOIN users u ON b.author_id = u.id
             ORDER BY b.created_at DESC`
        )
        res.json(rows)
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// POST /api/blogs
router.post('/', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    const { title, slug, excerpt, content, image_url, category, status } = req.body
    if (!title || !slug) return res.status(400).json({ message: 'Title and slug are required' })
    try {
        const [result] = await pool.query(
            `INSERT INTO blog_posts (title, slug, excerpt, content, image_url, category, status, author_id)
             VALUES (?,?,?,?,?,?,?,?)`,
            [title, slug, excerpt, content, image_url, category, status || 'draft', req.user.id]
        )
        res.status(201).json({ message: 'Blog post created', id: result.insertId })
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Slug already exists' })
        res.status(500).json({ message: 'Server error' })
    }
})

// PUT /api/blogs/:id
router.put('/:id', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    const { title, slug, excerpt, content, image_url, category, status } = req.body
    try {
        await pool.query(
            `UPDATE blog_posts SET title=?, slug=?, excerpt=?, content=?, image_url=?, category=?, status=? WHERE id=?`,
            [title, slug, excerpt, content, image_url, category, status, req.params.id]
        )
        res.json({ message: 'Blog updated' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/blogs/:id
router.delete('/:id', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    try {
        await pool.query('DELETE FROM blog_posts WHERE id = ?', [req.params.id])
        res.json({ message: 'Blog deleted' })
    } catch {
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
