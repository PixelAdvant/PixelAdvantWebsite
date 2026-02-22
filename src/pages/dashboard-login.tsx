import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const DashboardLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            if (login(username, password)) {
                // Redirect to dashboard based on role
                navigate('/dashboard')
            } else {
                setError('Invalid username or password')
            }
        } catch (err) {
            setError('Login failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '450px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '40px 30px',
                    textAlign: 'center'
                }}>
                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        marginBottom: '10px'
                    }}>
                        <i className="fa-solid fa-lock me-2" />
                        Dashboard Login
                    </h1>
                    <p style={{
                        fontSize: '14px',
                        opacity: 0.9,
                        marginBottom: '0'
                    }}>
                        PixelAdvant - Recruitment Agency
                    </p>
                </div>

                {/* Form */}
                <div style={{ padding: '40px 30px' }}>
                    {error && (
                        <div style={{
                            padding: '12px 16px',
                            backgroundColor: '#f8d7da',
                            color: '#721c24',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <i className="fa-solid fa-exclamation-circle" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        {/* Username */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: '600',
                                fontSize: '14px',
                                color: '#333'
                            }}>
                                <i className="fa-solid fa-user me-2" />
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin, content_creator, or marketing"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    border: '1px solid #ddd',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    color: '#333',
                                    boxSizing: 'border-box',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            />
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: '25px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: '600',
                                fontSize: '14px',
                                color: '#333'
                            }}>
                                <i className="fa-solid fa-lock me-2" />
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    border: '1px solid #ddd',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    color: '#333',
                                    boxSizing: 'border-box',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#ff6b35',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s',
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            {loading ? (
                                <><i className="fa-solid fa-spinner fa-spin me-2" />Logging in...</>
                            ) : (
                                <><i className="fa-solid fa-sign-in-alt me-2" />Login</>
                            )}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div style={{
                        marginTop: '30px',
                        padding: '15px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '6px',
                        fontSize: '13px'
                    }}>
                        <p style={{ fontWeight: '600', marginBottom: '10px', color: '#333' }}>
                            <i className="fa-solid fa-info-circle me-2" />Demo Credentials:
                        </p>
                        <div style={{ lineHeight: '1.8', color: '#666' }}>
                            <p style={{ margin: '5px 0' }}>👤 <strong>Admin:</strong> admin / admin123</p>
                            <p style={{ margin: '5px 0' }}>✍️ <strong>Content Creator:</strong> content_creator / creator123</p>
                            <p style={{ margin: '5px 0' }}>📊 <strong>Marketing:</strong> marketing / marketing123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLogin
