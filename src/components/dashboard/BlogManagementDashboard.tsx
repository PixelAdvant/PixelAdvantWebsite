import { useState, useEffect } from 'react'
import { api } from '@/lib/api'
import { useAuth } from '@/context/AuthContext'

interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    image_url: string
    category: string
    status: 'draft' | 'published'
    views: number
    created_at: string
    updated_at: string
    author_name: string
}

const BlogManagementDashboard = () => {
    const { token } = useAuth()
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [filterStatus, setFilterStatus] = useState<'all' | 'draft' | 'published'>('all')

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image_url: '',
        category: 'Technology',
        status: 'draft' as 'draft' | 'published'
    })

    // Fetch blogs
    useEffect(() => {
        fetchBlogs()
    }, [token])

    const fetchBlogs = async () => {
        try {
            setLoading(true)
            const data = await api.get('/blogs/all', token ?? undefined)
            setBlogs(data)
            setError('')
        } catch (err: any) {
            setError(err.message || 'Failed to fetch blogs')
        } finally {
            setLoading(false)
        }
    }

    // Auto-generate slug from title
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
    }

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (name === 'title') {
            setFormData(prev => ({
                ...prev,
                slug: generateSlug(value)
            }))
        }
    }

    // Create new blog
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setError('')
            if (!formData.title || !formData.slug || !formData.content) {
                setError('Title, slug, and content are required')
                return
            }

            await api.post('/blogs', formData, token ?? undefined)
            setSuccess('Blog created successfully!')
            setTimeout(() => setSuccess(''), 3000)
            setFormData({
                title: '',
                slug: '',
                excerpt: '',
                content: '',
                image_url: '',
                category: 'Technology',
                status: 'draft'
            })
            setShowForm(false)
            fetchBlogs()
        } catch (err: any) {
            setError(err.message || 'Failed to create blog')
        }
    }

    // Update blog
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!editingId) return

        try {
            setError('')
            if (!formData.title || !formData.slug || !formData.content) {
                setError('Title, slug, and content are required')
                return
            }

            await api.put(`/blogs/${editingId}`, formData, token ?? undefined)
            setSuccess('Blog updated successfully!')
            setTimeout(() => setSuccess(''), 3000)
            fetchBlogs()
            resetForm()
        } catch (err: any) {
            setError(err.message || 'Failed to update blog')
        }
    }

    // Edit blog
    const handleEdit = (blog: BlogPost) => {
        setFormData({
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt,
            content: blog.content,
            image_url: blog.image_url,
            category: blog.category,
            status: blog.status
        })
        setEditingId(blog.id)
        setShowForm(true)
    }

    // Delete blog
    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return

        try {
            setError('')
            await api.del(`/blogs/${id}`, token!)
            setSuccess('Blog deleted successfully!')
            setTimeout(() => setSuccess(''), 3000)
            fetchBlogs()
        } catch (err: any) {
            setError(err.message || 'Failed to delete blog')
        }
    }

    // Toggle status
    const handleToggleStatus = async (id: number, currentStatus: 'draft' | 'published') => {
        const blog = blogs.find(b => b.id === id)
        if (!blog) return

        const newStatus = currentStatus === 'draft' ? 'published' : 'draft'
        try {
            setError('')
            await api.put(`/blogs/${id}`, {
                ...blog,
                status: newStatus
            }, token ?? undefined)
            setSuccess(`Blog ${newStatus}!`)
            setTimeout(() => setSuccess(''), 3000)
            fetchBlogs()
        } catch (err: any) {
            setError(err.message || 'Failed to update blog status')
        }
    }

    const resetForm = () => {
        setFormData({
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            image_url: '',
            category: 'Technology',
            status: 'draft'
        })
        setEditingId(null)
        setShowForm(false)
    }

    // Filter blogs
    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = filterStatus === 'all' || blog.status === filterStatus
        return matchesSearch && matchesStatus
    })

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', padding: '30px 20px' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px'
                }}>
                    <h1 style={{
                        margin: 0,
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#333'
                    }}>
                        <i className="fa-solid fa-file-alt me-2" style={{ color: '#667eea' }} />
                        Blog Management
                    </h1>
                    <button
                        onClick={() => !showForm ? setShowForm(true) : resetForm()}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: showForm ? '#e74c3c' : '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                    >
                        <i className={`fa-solid ${showForm ? 'fa-times' : 'fa-plus'} me-2`} />
                        {showForm ? 'Cancel' : 'New Blog'}
                    </button>
                </div>

                {/* Alerts */}
                {error && (
                    <div style={{
                        padding: '15px',
                        backgroundColor: '#fee',
                        color: '#c33',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <i className="fa-solid fa-exclamation-circle me-2" />
                        {error}
                    </div>
                )}
                {success && (
                    <div style={{
                        padding: '15px',
                        backgroundColor: '#efe',
                        color: '#3c3',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <i className="fa-solid fa-check-circle me-2" />
                        {success}
                    </div>
                )}

                {/* Form Section */}
                {showForm && (
                    <div style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            margin: '0 0 20px 0',
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#333'
                        }}>
                            {editingId ? 'Edit Blog' : 'Create New Blog'}
                        </h2>

                        <form onSubmit={editingId ? handleUpdate : handleCreate}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '20px',
                                marginBottom: '20px'
                            }}>
                                {/* Title */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333'
                                    }}>
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter blog title"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            boxSizing: 'border-box'
                                        }}
                                        required
                                    />
                                </div>

                                {/* Slug */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333'
                                    }}>
                                        Slug *
                                    </label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleInputChange}
                                        placeholder="Auto-generated from title"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            boxSizing: 'border-box'
                                        }}
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333'
                                    }}>
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        <option>Technology</option>
                                        <option>Business</option>
                                        <option>Marketing</option>
                                        <option>Design</option>
                                        <option>Development</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Status */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333'
                                    }}>
                                        Status
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>

                                {/* Image URL */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333'
                                    }}>
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        name="image_url"
                                        value={formData.image_url}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/image.jpg"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Excerpt */}
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '600',
                                    color: '#333'
                                }}>
                                    Excerpt (Short Summary)
                                </label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleInputChange}
                                    placeholder="Enter a short excerpt for the blog..."
                                    rows={2}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        boxSizing: 'border-box',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '600',
                                    color: '#333'
                                }}>
                                    Content *
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    placeholder="Enter the full blog content..."
                                    rows={10}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        boxSizing: 'border-box',
                                        fontFamily: 'inherit'
                                    }}
                                    required
                                />
                                <small style={{ color: '#999', display: 'block', marginTop: '5px' }}>
                                    Supports HTML formatting
                                </small>
                            </div>

                            {/* Action Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '10px',
                                justifyContent: 'flex-end'
                            }}>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#e0e0e0',
                                        color: '#333',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#667eea',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    <i className="fa-solid fa-save me-2" />
                                    {editingId ? 'Update Blog' : 'Create Blog'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Filters & Search */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="Search blogs by title or slug..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            flex: 1,
                            minWidth: '250px',
                            padding: '10px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '6px',
                            fontSize: '14px'
                        }}
                    />
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as any)}
                        style={{
                            padding: '10px 15px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '6px',
                            fontSize: '14px'
                        }}
                    >
                        <option value="all">All Status</option>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                    <div style={{
                        padding: '8px 15px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#666'
                    }}>
                        {filteredBlogs.length} blog(s)
                    </div>
                </div>

                {/* Blogs List */}
                {loading ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '40px',
                        color: '#999',
                        fontSize: '16px'
                    }}>
                        <i className="fa-solid fa-spinner fa-spin me-2" />
                        Loading blogs...
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        color: '#999'
                    }}>
                        <i className="fa-solid fa-inbox fa-3x mb-3" style={{ color: '#ddd' }} />
                        <p style={{ margin: '15px 0 0 0', fontSize: '16px' }}>
                            {searchTerm || filterStatus !== 'all' ? 'No blogs found.' : 'No blogs yet. Create your first one!'}
                        </p>
                    </div>
                ) : (
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        overflow: 'hidden'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse'
                        }}>
                            <thead>
                                <tr style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '2px solid #e0e0e0'
                                }}>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        color: '#666',
                                        fontSize: '13px'
                                    }}>
                                        Title
                                    </th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        color: '#666',
                                        fontSize: '13px'
                                    }}>
                                        Category
                                    </th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        color: '#666',
                                        fontSize: '13px'
                                    }}>
                                        Status
                                    </th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        color: '#666',
                                        fontSize: '13px'
                                    }}>
                                        Views
                                    </th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        color: '#666',
                                        fontSize: '13px'
                                    }}>
                                        Author
                                    </th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        color: '#666',
                                        fontSize: '13px'
                                    }}>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBlogs.map((blog, idx) => (
                                    <tr
                                        key={blog.id}
                                        style={{
                                            borderBottom: '1px solid #e0e0e0',
                                            backgroundColor: idx % 2 === 0 ? '#fff' : '#f8f9fa'
                                        }}
                                    >
                                        <td style={{
                                            padding: '15px',
                                            fontSize: '14px',
                                            color: '#333'
                                        }}>
                                            <strong>{blog.title}</strong>
                                            <br />
                                            <small style={{ color: '#999' }}>/{blog.slug}</small>
                                        </td>
                                        <td style={{
                                            padding: '15px',
                                            fontSize: '14px',
                                            color: '#666'
                                        }}>
                                            {blog.category}
                                        </td>
                                        <td style={{
                                            padding: '15px',
                                            textAlign: 'center'
                                        }}>
                                            <span style={{
                                                padding: '5px 12px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                backgroundColor: blog.status === 'published' ? '#d4edda' : '#fff3cd',
                                                color: blog.status === 'published' ? '#155724' : '#856404'
                                            }}>
                                                {blog.status === 'published' ? (
                                                    <>
                                                        <i className="fa-solid fa-check-circle me-1" />
                                                        Published
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fa-solid fa-edit me-1" />
                                                        Draft
                                                    </>
                                                )}
                                            </span>
                                        </td>
                                        <td style={{
                                            padding: '15px',
                                            textAlign: 'center',
                                            fontSize: '14px',
                                            color: '#666',
                                            fontWeight: '500'
                                        }}>
                                            {blog.views}
                                        </td>
                                        <td style={{
                                            padding: '15px',
                                            textAlign: 'center',
                                            fontSize: '14px',
                                            color: '#666'
                                        }}>
                                            {blog.author_name}
                                        </td>
                                        <td style={{
                                            padding: '15px',
                                            textAlign: 'center'
                                        }}>
                                            <button
                                                onClick={() => handleToggleStatus(blog.id, blog.status)}
                                                title={blog.status === 'draft' ? 'Publish' : 'Unpublish'}
                                                style={{
                                                    padding: '6px 10px',
                                                    marginRight: '5px',
                                                    backgroundColor: blog.status === 'draft' ? '#667eea' : '#f39c12',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                <i className={`fa-solid ${blog.status === 'draft' ? 'fa-upload' : 'fa-lock'}`} />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                style={{
                                                    padding: '6px 10px',
                                                    marginRight: '5px',
                                                    backgroundColor: '#27ae60',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                <i className="fa-solid fa-edit" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                style={{
                                                    padding: '6px 10px',
                                                    backgroundColor: '#e74c3c',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                <i className="fa-solid fa-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogManagementDashboard
