import React, { createContext, useContext, useState, useEffect } from 'react'

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
    isAuthenticated: boolean
    login: (username: string, password: string) => boolean
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Dummy users database
const dummyUsers: Record<string, { password: string; user: User }> = {
    admin: {
        password: 'admin123',
        user: {
            id: '1',
            username: 'admin',
            email: 'admin@pixeladvant.com',
            role: 'admin',
            name: 'Admin User'
        }
    },
    content_creator: {
        password: 'creator123',
        user: {
            id: '2',
            username: 'content_creator',
            email: 'creator@pixeladvant.com',
            role: 'content_creator',
            name: 'Content Creator'
        }
    },
    marketing: {
        password: 'marketing123',
        user: {
            id: '3',
            username: 'marketing',
            email: 'marketing@pixeladvant.com',
            role: 'marketing',
            name: 'Marketing Manager'
        }
    }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)

    // Check if user is already logged in (from localStorage)
    useEffect(() => {
        const storedUser = localStorage.getItem('dashboardUser')
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (error) {
                localStorage.removeItem('dashboardUser')
            }
        }
    }, [])

    const login = (username: string, password: string): boolean => {
        const userData = dummyUsers[username]
        if (userData && userData.password === password) {
            setUser(userData.user)
            localStorage.setItem('dashboardUser', JSON.stringify(userData.user))
            return true
        }
        return false
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('dashboardUser')
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}
