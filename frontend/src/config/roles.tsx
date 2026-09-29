export type Role = 'admin' | 'storeowner' | 'customer'

export interface NavLinkItem {
  label: string
  href: string
}

interface RoleConfig {
  label: string 
  title: string 
  basePath: string 
  links: NavLinkItem[]
}

export const ROLE_CONFIG: Record<Role, RoleConfig> = {
  customer: {
    label: 'Customer',
    title: 'YourStore',
    basePath: '/customer',
    links: [
      { label: 'Shop', href: '#' },
      { label: 'My Orders', href: '#' },
      { label: 'Cart', href: '#' },
    ],
  },
  storeowner: {
    label: 'Store Owner',
    title: 'YourStore StoreOwner',
    basePath: '/storeowner',
    links: [
      { label: 'My Products', href: '#' },
      { label: 'Orders', href: '#' },
      { label: 'Earnings', href: '#' },
    ],
  },
  admin: {
    label: 'Admin',
    title: 'YourStore Admin',
    basePath: '/admin',
    links: [
      { label: 'Users', href: '#' },
      { label: 'Stores', href: '#' },
      { label: 'Reports', href: '#' },
    ],
  },
}
