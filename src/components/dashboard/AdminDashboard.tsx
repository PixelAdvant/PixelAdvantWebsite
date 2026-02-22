import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()

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

            {/* Main Content */}
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
                        />
                        <AdminControlButton
                            icon="fa-file-alt"
                            label="Manage Blogs"
                            description="Edit and remove blogs"
                        />
                        <AdminControlButton
                            icon="fa-briefcase"
                            label="Manage Jobs"
                            description="Manage job postings"
                        />
                        <AdminControlButton
                            icon="fa-comments"
                            label="Moderate Comments"
                            description="Review and moderate comments"
                        />
                        <AdminControlButton
                            icon="fa-chart-bar"
                            label="Analytics"
                            description="View site analytics"
                        />
                        <AdminControlButton
                            icon="fa-cog"
                            label="Settings"
                            description="System settings"
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
        </div>
    )
}

const AdminControlButton = ({ icon, label, description }: any) => (
    <button style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        textAlign: 'left'
    }}
    onMouseEnter={(e) => {
        (e.target as HTMLElement).style.backgroundColor = '#667eea'
        ;(e.target as HTMLElement).style.color = 'white'
        ;(e.target as HTMLElement).style.borderColor = '#667eea'
    }}
    onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = '#f8f9fa'
        ;(e.target as HTMLElement).style.color = 'inherit'
        ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
    }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: '600', fontSize: '16px' }}>
            <i className={`fa-solid ${icon} me-2`} />
            {label}
        </p>
        <p style={{ margin: 0, fontSize: '13px', opacity: 0.7 }}>
            {description}
        </p>
    </button>
)

const DashboardCard = ({ title, items }: any) => (
    <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
    }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700' }}>
            {title}
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {items.map((item: string, index: number) => (
                <li key={index} style={{
                    padding: '10px 0',
                    borderBottom: index < items.length - 1 ? '1px solid #f0f0f0' : 'none',
                    fontSize: '14px',
                    color: '#666'
                }}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
)

export default AdminDashboard
