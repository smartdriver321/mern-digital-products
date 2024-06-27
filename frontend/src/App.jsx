import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import ProtectedRoutes from './components/ProtectedRoutes'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/admin/*'
          element={
            <ProtectedRoutes>
              <AdminRoutes />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  )
}

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Admin />} />
    </Routes>
  )
}
