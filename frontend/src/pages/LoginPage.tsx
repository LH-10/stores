import { Navigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../context/AuthContext'
import { ROLE_CONFIG, type Role } from '../config/roles'

export default function LoginPage({ role }: { role: Role }) {
  const { user } = useAuth()

  if (user?.role === role) {
    return <Navigate to={`${ROLE_CONFIG[role].basePath}/dashboard`} replace />
  }

  return <LoginForm role={role} />
}
