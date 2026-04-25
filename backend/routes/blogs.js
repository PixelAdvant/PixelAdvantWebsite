const express = require('express')
const pool = require('../config/db')
const { authMiddleware, requireRole } = require('../middleware/auth')
const router = express.Router()

// GET /api/blogs (public - published posts only)
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT b.id, b.title, b.slug, b.excerpt, b.image_url, b.category,
                    b.views, b.created_at, u.name AS author_name
             FROM blog_posts b
             LEFT JOIN users u ON b.author_id = u.id
             WHERE b.status = 'published'
             ORDER BY b.created_at DESC`
        )
        res.json(result.rows)
    } catch (err) {
        console.error('Get blogs error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/blogs/all - content_creator and admin see all
router.get('/all', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT b.*, u.name AS author_name FROM blog_posts b
             LEFT JOIN users u ON b.author_id = u.id
             ORDER BY b.created_at DESC`
        )
        res.json(result.rows)
    } catch (err) {
        console.error('Get all blogs error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// GET /api/blogs/:id (get single blog post)
router.get('/:id', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT b.*, u.name AS author_name, u.email AS author_email
             FROM blog_posts b
             LEFT JOIN users u ON b.author_id = u.id
             WHERE b.id = $1`,
            [req.params.id]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Blog not found' })
        }
        res.json(result.rows[0])
    } catch (err) {
        console.error('Get blog error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// POST /api/blogs - Create new blog post
router.post('/', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    const { title, slug, excerpt, content, image_url, category, status } = req.body
    
    if (!title || !slug) {
        return res.status(400).json({ message: 'Title and slug are required' })
    }

    try {
        const result = await pool.query(
            `INSERT INTO blog_posts (title, slug, excerpt, content, image_url, category, status, author_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
             RETURNING id`,
            [title, slug, excerpt, content, image_url, category, status || 'draft', req.user.id]
        )
        res.status(201).json({ 
            message: 'Blog post created', 
            id: result.rows[0].id,
            slug: slug 
        })
    } catch (err) {
        if (err.code === '23505') {
            // Unique constraint violation
            return res.status(409).json({ message: 'Slug already exists' })
        }
        console.error('Create blog error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// PUT /api/blogs/:id - Update blog post
router.put('/:id', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    const { title, slug, excerpt, content, image_url, category, status } = req.body
    
    try {
        const result = await pool.query(
            `UPDATE blog_posts 
             SET title=$1, slug=$2, excerpt=$3, content=$4, image_url=$5, category=$6, status=$7, updated_at=CURRENT_TIMESTAMP
             WHERE id=$8
             RETURNING id`,
            [title, slug, excerpt, content, image_url, category, status, req.params.id]
        )
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Blog post not found' })
        }
        
        res.json({ message: 'Blog updated', id: result.rows[0].id })
    } catch (err) {
        if (err.code === '23505') {
            return res.status(409).json({ message: 'Slug already exists' })
        }
        console.error('Update blog error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE /api/blogs/:id - Delete blog post
router.delete('/:id', authMiddleware, requireRole('admin', 'content_creator'), async (req, res) => {
    try {
        const result = await pool.query(
            'DELETE FROM blog_posts WHERE id=$1 RETURNING id',
            [req.params.id]
        )
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Blog post not found' })
        }
        
        res.json({ message: 'Blog deleted' })
    } catch (err) {
        console.error('Delete blog error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

// POST /api/blogs/:id/views - Increment view count
router.post('/:id/views', async (req, res) => {
    try {
        await pool.query(
            'UPDATE blog_posts SET views = views + 1 WHERE id = $1',
            [req.params.id]
        )
        res.json({ message: 'View count updated' })
    } catch (err) {
        console.error('Update views error:', err)
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = router
