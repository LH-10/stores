import { Link } from 'react-router-dom'
import { ROLE_CONFIG } from '../config/roles'

const buttonStyle = {
  display: 'block',
  padding: 12,
  marginBottom: 10,
  fontSize: 16,
  border: '1px solid #666',
  background: '#f5f5f5',
  color: 'black',
  textDecoration: 'none',
}

// Admin is intentionally NOT listed here.
export default function LandingPage() {
  return (
    <main style={{ maxWidth: 400, margin: '40px auto', padding: '0 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to YourStore</h1>
      <p>Login as:</p>
      <Link to={`${ROLE_CONFIG.customer.basePath}/login`} style={buttonStyle}>
        Customer
      </Link>
      <Link to={`${ROLE_CONFIG.storeowner.basePath}/login`} style={buttonStyle}>
        Store Owner
      </Link>
    </main>
  )
}
