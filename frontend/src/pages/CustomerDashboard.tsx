import { useAuth } from '../context/AuthContext'

export default function CustomerDashboard() {
  const { user } = useAuth()

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Customer Dashboard</h1>
      <p>Logged in as {user?.email}</p>
      {/* Put customer stuff here: product list, cart, order history */}
    </main>
  )
}
