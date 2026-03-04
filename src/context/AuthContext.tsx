import React, { createContext, useContext, useState, useEffect } from 'react'
import { api } from '@/lib/api'

export type UserRole = 'admin' | 'content_creator' | 'marketing'

export interface User {
    id: string
    username: string
    email: string
    role: UserRole
    name: string
}

interface AuthContextType {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Restore session from localStorage on mount, verify token is still valid
    useEffect(() => {
        const storedToken = localStorage.getItem('dashboardToken')
        const storedUser = localStorage.getItem('dashboardUser')

        if (storedToken && storedUser) {
            try {
                // Set state immediately for fast UI restore
                setToken(storedToken)
                setUser(JSON.parse(storedUser))

                // Verify token with backend (non-blocking)
                api.post('/auth/verify', {}, storedToken)
                    .then(data => {
                        setUser(data.user)
                    })
                    .catch(() => {
                        // Token expired or invalid – clear session
                        localStorage.removeItem('dashboardToken')
                        localStorage.removeItem('dashboardUser')
                        setUser(null)
                        setToken(null)
                    })
            } catch {
                localStorage.removeItem('dashboardToken')
                localStorage.removeItem('dashboardUser')
            }
        }
        setIsLoading(false)
    }, [])

    const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const data = await api.post('/auth/login', { username, password })
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('dashboardToken', data.token)
            localStorage.setItem('dashboardUser', JSON.stringify(data.user))
            return { success: true }
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Login failed'
            return { success: false, error: message }
        }
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('dashboardToken')
        localStorage.removeItem('dashboardUser')
    }

    return (
        <AuthContext.Provider value={{
            user,
            token,
            isAuthenticated: !!user,
            isLoading,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
