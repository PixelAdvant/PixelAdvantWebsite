import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import BlogManagementDashboard from './BlogManagementDashboard'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [activeTab, setActiveTab] = useState<'overview' | 'blogs'>('overview')

    const handleLogout = () => {
        logout()
        navigate('/dashboard-login')
    }

    const stats = [
        { icon: 'fa-users', label: 'Total Users', value: '1,245', color: '#667eea' },
        { icon: 'fa-file-alt', label: 'Total Blogs', value: '48', color: '#764ba2' },
        { icon: 'fa-briefcase', label: 'Job Postings', value: '12', color: '#f093fb' },
        { icon: 'fa-comments', label: 'Comments', value: '324', color: '#4facfe' }
    ]

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
            {/* Header */}
            <header style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                            <i className="fa-solid fa-gauge me-2" />
                            Admin Dashboard
                        </h1>
                        <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
                            Welcome back, {user?.name}! - System Administrator
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
                            borderBottom: activeTab === 'overview' ? '3px solid #667eea' : 'none',
                            color: activeTab === 'overview' ? '#667eea' : '#666',
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
                            borderBottom: activeTab === 'blogs' ? '3px solid #667eea' : 'none',
                            color: activeTab === 'blogs' ? '#667eea' : '#666',
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
                    {/* Stats Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '10px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                borderLeft: `4px solid ${stat.color}`
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}>
                                    <div>
                                        <p style={{ color: '#999', margin: '0 0 10px 0', fontSize: '14px' }}>
                                            {stat.label}
                                        </p>
                                        <h3 style={{
                                            margin: 0,
                                            fontSize: '32px',
                                            fontWeight: '700',
                                            color: '#333'
                                        }}>
                                            {stat.value}
                                        </h3>
                                    </div>
                                    <i style={{
                                        fontSize: '28px',
                                        color: stat.color,
                                        opacity: 0.3
                                    }} className={`fa-solid ${stat.icon}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Admin Controls */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '700' }}>
                            <i className="fa-solid fa-sliders me-2" />
                            Admin Controls
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '15px'
                        }}>
                            <AdminControlButton
                                icon="fa-users"
                                label="Manage Users"
                                description="View and manage all users"
                                onClick={() => { }}
                            />
                            <AdminControlButton
                                icon="fa-file-alt"
                                label="Manage Blogs"
                                description="Edit and remove blogs"
                                onClick={() => setActiveTab('blogs')}
                            />
                            <AdminControlButton
                                icon="fa-briefcase"
                                label="Manage Jobs"
                                description="Manage job postings"
                                onClick={() => { }}
                            />
                            <AdminControlButton
                                icon="fa-comments"
                                label="Moderate Comments"
                                description="Review and moderate comments"
                                onClick={() => { }}
                            />
                            <AdminControlButton
                                icon="fa-chart-bar"
                                label="Analytics"
                                description="View site analytics"
                                onClick={() => { }}
                            />
                            <AdminControlButton
                                icon="fa-cog"
                                label="Settings"
                                description="System settings"
                                onClick={() => { }}
                            />
                        </div>
                    </div>

                    {/* System Overview */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px'
                    }}>
                        <DashboardCard
                            title="Recent Activities"
                            items={[
                                '✓ Blog published by Content Creator',
                                '✓ Marketing campaign updated',
                                '✓ 12 new job applications',
                                '✓ 45 new blog subscribers'
                            ]}
                        />
                        <DashboardCard
                            title="System Health"
                            items={[
                                '✓ Website Status: Online',
                                '✓ Database: Healthy',
                                '✓ Email Service: Active',
                                '✓ Performance: Excellent'
                            ]}
                        />
                    </div>
                </main>
            ) : (
                <BlogManagementDashboard />
            )}
        </div>
    )
}

const AdminControlButton = ({ icon, label, description, onClick }: any) => (
    <button style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        textAlign: 'left'
    }}
    onClick={onClick}
    onMouseEnter={(e) => {
        (e.target as HTMLElement).style.backgroundColor = '#667eea'
        const textElements = (e.target as HTMLElement).querySelectorAll('*')
        textElements.forEach(el => {
            (el as HTMLElement).style.color = 'white'
        })
    }}
    onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = '#f8f9fa'
        const textElements = (e.target as HTMLElement).querySelectorAll('*')
        textElements.forEach(el => {
            if ((el as HTMLElement).className.includes('icon')) {
                (el as HTMLElement).style.color = '#667eea'
            } else {
                (el as HTMLElement).style.color = '#666'
            }
        })
    }}
    >
        <i className={`fa-solid ${icon}`} style={{ fontSize: '24px', marginBottom: '10px', display: 'block', color: '#667eea' }} />
        <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{label}</h4>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{description}</p>
    </button>
)

const DashboardCard = ({ title, items }: any) => (
    <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
    }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: '#333' }}>
            {title}
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {items.map((item: string, idx: number) => (
                <li key={idx} style={{
                    padding: '10px 0',
                    borderBottom: idx < items.length - 1 ? '1px solid #f0f0f0' : 'none',
                    color: '#666',
                    fontSize: '14px'
                }}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
)

export default AdminDashboard
