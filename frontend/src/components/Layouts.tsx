import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuth } from '../context/AuthContext'
import { ROLE_CONFIG, type Role } from '../config/roles'

export function PublicLayout() {
  return (
    <>
      <Navbar
        title="YourStore"
        links={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <Outlet />
    </>
  )
}

export function RoleLayout({ role }: { role: Role }) {
  const { user } = useAuth()
  const config = ROLE_CONFIG[role]

  return (
    <>
      <Navbar title={config.title} links={config.links} showLogout={user?.role === role} />
      <Outlet />
    </>
  )
}
