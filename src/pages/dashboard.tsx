import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AdminDashboard from '@/components/dashboard/AdminDashboard'
import ContentCreatorDashboard from '@/components/dashboard/ContentCreatorDashboard'
import MarketingDashboard from '@/components/dashboard/MarketingDashboard'

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/dashboard-login')
        }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated || !user) {
        return null
    }

    return (
        <div>
            {user.role === 'admin' && <AdminDashboard />}
            {user.role === 'content_creator' && <ContentCreatorDashboard />}
            {user.role === 'marketing' && <MarketingDashboard />}
        </div>
    )
}

export default Dashboard
