import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout, RoleLayout } from './components/Layouts'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import CustomerDashboard from './pages/CustomerDashboard'
import StoreOwnerDashboard from './pages/StoreOwnerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import { ROLE_CONFIG } from './config/roles'

const customerBase = ROLE_CONFIG.customer.basePath
const storeownerBase = ROLE_CONFIG.storeowner.basePath
const adminBase = ROLE_CONFIG.admin.basePath

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path={customerBase} element={<RoleLayout role="customer" />}>
        <Route path="login" element={<LoginPage role="customer" />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path={storeownerBase} element={<RoleLayout role="storeowner" />}>
        <Route path="login" element={<LoginPage role="storeowner" />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute role="storeowner">
              <StoreOwnerDashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path={adminBase} element={<RoleLayout role="admin" />}>
        <Route path="login" element={<LoginPage role="admin" />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
