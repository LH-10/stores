import { useAuth } from '../context/AuthContext'

export default function AdminDashboard() {
  const { user } = useAuth()

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Admin Dashboard</h1>
      <p>Logged in as {user?.email}</p>
      {/* Put admin stuff here: manage users, approve stores, reports */}
    </main>
  )
}
