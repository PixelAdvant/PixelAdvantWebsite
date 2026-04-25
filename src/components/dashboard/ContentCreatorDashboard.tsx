import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import BlogManagementDashboard from './BlogManagementDashboard'

const ContentCreatorDashboard = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [activeTab, setActiveTab] = useState<'overview' | 'blogs'>('overview')

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
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 100
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

            {/* Tab Navigation */}
            <div style={{
                backgroundColor: 'white',
                borderBottom: '1px solid #e0e0e0',
                position: 'sticky',
                top: 0,
                zIndex: 99
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    padding: '0 30px'
                }}>
                    <button
                        onClick={() => setActiveTab('overview')}
                        style={{
                            padding: '15px 20px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderBottom: activeTab === 'overview' ? '3px solid #f5576c' : 'none',
                            color: activeTab === 'overview' ? '#f5576c' : '#666',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: activeTab === 'overview' ? '600' : '500',
                            transition: 'all 0.3s'
                        }}
                    >
                        <i className="fa-solid fa-chart-line me-2" />
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('blogs')}
                        style={{
                            padding: '15px 20px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderBottom: activeTab === 'blogs' ? '3px solid #f5576c' : 'none',
                            color: activeTab === 'blogs' ? '#f5576c' : '#666',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: activeTab === 'blogs' ? '600' : '500',
                            transition: 'all 0.3s'
                        }}
                    >
                        <i className="fa-solid fa-file-alt me-2" />
                        Blog Management
                    </button>
                </div>
            </div>

            {/* Main Content */}
            {activeTab === 'overview' ? (
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
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
                        <button
                            onClick={() => setActiveTab('blogs')}
                            style={{
                                padding: '12px 30px',
                                backgroundColor: 'white',
                                color: '#f5576c',
                                border: 'none',
                                borderRadius: '6px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            <i className="fa-solid fa-plus me-2" />
                            New Blog
                        </button>
                    </div>
                </main>
            ) : (
                <BlogManagementDashboard />
            )}
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
