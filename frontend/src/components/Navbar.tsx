import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { NavLinkItem } from '../config/roles'

interface NavbarProps {
  title: string
  links: NavLinkItem[]
  showLogout?: boolean
}

export default function Navbar({ title, links, showLogout = false }: NavbarProps) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        background: '#eee',
        borderBottom: '1px solid #999',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Link to="/" style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>
        {title}
      </Link>

      <div>
        {links.map((link) => (
          <a key={link.label} href={link.href} style={{ marginRight: 15 }}>
            {link.label}
          </a>
        ))}
        {showLogout && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  )
}
