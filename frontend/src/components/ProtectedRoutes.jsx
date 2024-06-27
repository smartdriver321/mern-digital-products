import { Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  // return !!localStorage.getItem('token')
  return true
}

const ProtectedRoutes = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to='/login' replace />
  }
  return children
}

export default ProtectedRoutes
