// API base URL – change to your EC2 public IP or domain when deploying
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const api = {
    async post(path: string, body: object, token?: string) {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' }
        if (token) headers['Authorization'] = `Bearer ${token}`
        const res = await fetch(`${API_BASE_URL}${path}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Request failed')
        return data
    },

    async get(path: string, token?: string) {
        const headers: Record<string, string> = {}
        if (token) headers['Authorization'] = `Bearer ${token}`
        const res = await fetch(`${API_BASE_URL}${path}`, { headers })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Request failed')
        return data
    },

    async del(path: string, token: string) {
        const res = await fetch(`${API_BASE_URL}${path}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Request failed')
        return data
    }
}

export default API_BASE_URL
