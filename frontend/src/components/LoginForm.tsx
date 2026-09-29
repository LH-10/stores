import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROLE_CONFIG, type Role } from '../config/roles'

export default function LoginForm({ role }: { role: Role }) {
  const { login } = useAuth()
  const navigate = useNavigate()
  const config = ROLE_CONFIG[role]

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await login(role, email, password)
      navigate(`${config.basePath}/dashboard`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Try again.')
    }
  }

  const inputStyle = { display: 'block', width: '100%', padding: 8, marginBottom: 12, boxSizing: 'border-box' as const }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '40px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>{config.label} Login</h2>

      <label htmlFor="email">Email</label>
      <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" style={{ width: '100%', padding: 10, fontSize: 16 }}>
        Login
      </button>

      {/* No "back" link on the hidden admin page */}
      {role !== 'admin' && (
        <p style={{ textAlign: 'center' }}>
          <Link to="/">Back to home</Link>
        </p>
      )}
    </form>
  )
}
