import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROLE_CONFIG, type Role } from '../config/roles'

export default function ProtectedRoute({ role, children }: { role: Role; children: ReactNode }) {
  const { user } = useAuth()

  if (user?.role !== role) {
    // Admin URLs are never revealed to others: send them to the home page instead of the admin login
    const target = role === 'admin' ? '/' : `${ROLE_CONFIG[role].basePath}/login`
    return <Navigate to={target} replace />
  }

  return <>{children}</>
}
