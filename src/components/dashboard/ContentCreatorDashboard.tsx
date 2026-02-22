import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const ContentCreatorDashboard = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [blogs] = useState([
        { id: 1, title: 'GCC Setup in India', status: 'Published', date: '2025-02-22', views: 1250 },
        { id: 2, title: 'Recruitment Strategies', status: 'Draft', date: '2025-02-20', views: 0 },
        { id: 3, title: 'Talent Management', status: 'Published', date: '2025-02-18', views: 890 }
    ])

    const handleLogout = () => {
        logout()
        navigate('/dashboard-login')
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
            {/* Header */}
            <header style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '20px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h1 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>
                            <i className="fa-solid fa-pen-fancy me-2" />
                            Content Creator Dashboard
                        </h1>
                        <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
                            Welcome, {user?.name}! - Create and manage your content
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        <i className="fa-solid fa-sign-out-alt me-2" />
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 30px' }}>
                {/* Quick Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px'
                }}>
                    <StatCard label="Total Blogs" value="3" icon="fa-file-alt" color="#f093fb" />
                    <StatCard label="Published" value="2" icon="fa-check-circle" color="#f5576c" />
                    <StatCard label="Draft" value="1" icon="fa-clock" color="#feca57" />
                    <StatCard label="Total Views" value="2,140" icon="fa-eye" color="#48dbfb" />
                </div>

                {/* Create New Blog Button */}
                <div style={{
                    backgroundColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    padding: '30px',
                    borderRadius: '10px',
                    marginBottom: '40px',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h3 style={{ margin: '0 0 5px 0' }}>Create New Blog Post</h3>
                        <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
                            Share your insights with the community
                        </p>
                    </div>
                    <button style={{
                        padding: '12px 30px',
                        backgroundColor: 'white',
                        color: '#f5576c',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        <i className="fa-solid fa-plus me-2" />
                        New Blog
                    </button>
                </div>

                {/* Blog List */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    overflow: 'hidden'
                }}>
                    <div style={{ padding: '30px', borderBottom: '1px solid #f0f0f0' }}>
                        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700' }}>
                            <i className="fa-solid fa-book me-2" />
                            My Blog Posts
                        </h2>
                    </div>

                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                                <th style={{ padding: '15px 30px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Title</th>
                                <th style={{ padding: '15px 30px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Status</th>
                                <th style={{ padding: '15px 30px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Date</th>
                                <th style={{ padding: '15px 30px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Views</th>
                                <th style={{ padding: '15px 30px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '20px 30px' }}>{blog.title}</td>
                                    <td style={{ padding: '20px 30px' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            backgroundColor: blog.status === 'Published' ? '#d4edda' : '#fff3cd',
                                            color: blog.status === 'Published' ? '#155724' : '#856404'
                                        }}>
                                            {blog.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '20px 30px', fontSize: '14px' }}>{blog.date}</td>
                                    <td style={{ padding: '20px 30px', fontSize: '14px' }}>
                                        {blog.views > 0 ? `${blog.views} views` : '-'}
                                    </td>
                                    <td style={{ padding: '20px 30px', textAlign: 'center' }}>
                                        <button style={{
                                            padding: '6px 12px',
                                            marginRight: '8px',
                                            backgroundColor: '#667eea',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}>
                                            <i className="fa-solid fa-edit" /> Edit
                                        </button>
                                        <button style={{
                                            padding: '6px 12px',
                                            backgroundColor: '#dc3545',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}>
                                            <i className="fa-solid fa-trash" /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

const StatCard = ({ label, value, color }: any) => (
    <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        borderLeft: `4px solid ${color}`
    }}>
        <p style={{ color: '#999', margin: '0 0 10px 0', fontSize: '14px' }}>
            {label}
        </p>
        <h3 style={{ margin: 0, fontSize: '28px', fontWeight: '700', color: '#333' }}>
            {value}
        </h3>
    </div>
)

export default ContentCreatorDashboard
