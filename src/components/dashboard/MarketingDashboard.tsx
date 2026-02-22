import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const MarketingDashboard = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [campaigns] = useState([
        { id: 1, name: 'GCC Recruitment Drive', status: 'Active', impressions: 15000, clicks: 1250 },
        { id: 2, name: 'Talent Pool Campaign', status: 'Active', impressions: 8500, clicks: 680 },
        { id: 3, name: 'Email Marketing Week 1', status: 'Completed', impressions: 5200, clicks: 420 }
    ])

    const handleLogout = () => {
        logout()
        navigate('/dashboard-login')
    }

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
                            <i className="fa-solid fa-chart-line me-2" />
                            Marketing Dashboard
                        </h1>
                        <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
                            Welcome, {user?.name}! - Track campaign performance
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
                {/* Key Metrics */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px'
                }}>
                    <MetricCard label="Total Impressions" value="28,700" icon="fa-eye" color="#667eea" />
                    <MetricCard label="Total Clicks" value="2,350" icon="fa-mouse" color="#764ba2" />
                    <MetricCard label="CTR" value="8.18%" icon="fa-percent" color="#f093fb" />
                    <MetricCard label="Active Campaigns" value="2" icon="fa-rocket" color="#00d2d3" />
                </div>

                {/* Campaign Creation */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    padding: '30px',
                    marginBottom: '40px'
                }}>
                    <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '700' }}>
                        <i className="fa-solid fa-plus-circle me-2" style={{ color: '#667eea' }} />
                        Launch New Campaign
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '15px'
                    }}>
                        <CampaignTypeButton icon="fa-envelope" label="Email Campaign" />
                        <CampaignTypeButton icon="fa-share-alt" label="Social Media" />
                        <CampaignTypeButton icon="fa-ads" label="Ad Campaign" />
                        <CampaignTypeButton icon="fa-bullhorn" label="SEO Campaign" />
                    </div>
                </div>

                {/* Campaign Performance */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    overflow: 'hidden'
                }}>
                    <div style={{ padding: '30px', borderBottom: '1px solid #f0f0f0' }}>
                        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700' }}>
                            <i className="fa-solid fa-chart-bar me-2" />
                            Campaign Performance
                        </h2>
                    </div>

                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                                <th style={{ padding: '15px 30px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Campaign</th>
                                <th style={{ padding: '15px 30px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Status</th>
                                <th style={{ padding: '15px 30px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Impressions</th>
                                <th style={{ padding: '15px 30px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Clicks</th>
                                <th style={{ padding: '15px 30px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>CTR</th>
                                <th style={{ padding: '15px 30px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid #e0e0e0' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign) => {
                                const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2)
                                return (
                                    <tr key={campaign.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                        <td style={{ padding: '20px 30px', fontWeight: '500' }}>
                                            {campaign.name}
                                        </td>
                                        <td style={{ padding: '20px 30px' }}>
                                            <span style={{
                                                display: 'inline-block',
                                                padding: '6px 12px',
                                                borderRadius: '20px',
                                                fontSize: '13px',
                                                fontWeight: '600',
                                                backgroundColor: campaign.status === 'Active' ? '#d4edda' : '#e2e3e5',
                                                color: campaign.status === 'Active' ? '#155724' : '#383d41'
                                            }}>
                                                {campaign.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '20px 30px', textAlign: 'center', fontWeight: '500' }}>
                                            {campaign.impressions.toLocaleString()}
                                        </td>
                                        <td style={{ padding: '20px 30px', textAlign: 'center', fontWeight: '500' }}>
                                            {campaign.clicks.toLocaleString()}
                                        </td>
                                        <td style={{ padding: '20px 30px', textAlign: 'center', fontWeight: '500', color: '#667eea' }}>
                                            {ctr}%
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
                                                <i className="fa-solid fa-chart-mixed" /> Analyze
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Bottom Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginTop: '40px'
                }}>
                    <InfoCard 
                        title="Top Performing Campaign" 
                        value="GCC Recruitment Drive" 
                        subtitle="8.33% CTR"
                        icon="fa-trophy"
                        color="#f0ad4e"
                    />
                    <InfoCard 
                        title="Total Budget Used" 
                        value="$2,450" 
                        subtitle="$5,000 allocated"
                        icon="fa-dollar-sign"
                        color="#5cb85c"
                    />
                    <InfoCard 
                        title="Avg. Response Rate" 
                        value="12.5%" 
                        subtitle="↑ 2.3% from last month"
                        icon="fa-arrow-up"
                        color="#667eea"
                    />
                </div>
            </main>
        </div>
    )
}

const MetricCard = ({ label, value, icon, color }: any) => (
    <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        borderTop: `4px solid ${color}`
    }}>
        <p style={{ color: '#999', margin: '0 0 10px 0', fontSize: '14px' }}>
            <i className={`fa-solid ${icon} me-2`} style={{ color }} />
            {label}
        </p>
        <h3 style={{ margin: 0, fontSize: '28px', fontWeight: '700', color: '#333' }}>
            {value}
        </h3>
    </div>
)

const CampaignTypeButton = ({ icon, label }: any) => (
    <button style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        fontSize: '14px',
        fontWeight: '500'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#667eea'
        e.currentTarget.style.backgroundColor = '#f0f3ff'
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e0e0e0'
        e.currentTarget.style.backgroundColor = '#f8f9fa'
    }}>
        <div style={{ fontSize: '24px', marginBottom: '8px', color: '#667eea' }}>
            <i className={`fa-solid ${icon}`} />
        </div>
        {label}
    </button>
)

const InfoCard = ({ title, value, subtitle, icon, color }: any) => (
    <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        borderLeft: `5px solid ${color}`
    }}>
        <p style={{ color: '#999', margin: '0 0 10px 0', fontSize: '13px' }}>
            <i className={`fa-solid ${icon} me-2`} style={{ color }} />
            {title}
        </p>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: '700' }}>
            {value}
        </h3>
        <p style={{ margin: 0, color: '#999', fontSize: '13px' }}>
            {subtitle}
        </p>
    </div>
)

export default MarketingDashboard
