import { useAuth } from '../context/AuthContext'

export default function StoreOwnerDashboard() {
  const { user } = useAuth()

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Store Owner Dashboard</h1>
      <p>Logged in as {user?.email}</p>
    </main>
  )
}
