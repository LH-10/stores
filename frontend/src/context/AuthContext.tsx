import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Role } from '../config/roles'

interface User {
  role: Role
  email: string
}

interface AuthValue {
  user: User | null
  login: (role: Role, email: string, password: string) => Promise<void>
  logout: () => void
}

const STORAGE_KEY = 'yourstore_user'
const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? (JSON.parse(saved) as User) : null
  })

  const login = async (role: Role, email: string, password: string) => {
    // const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ role, email, password }) })
    // if (!res.ok) throw new Error('Invalid email or password')
    if (!email || !password) throw new Error('Enter your email and password.')

    const next = { role, email }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setUser(next)
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
