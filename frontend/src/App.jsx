import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import ProtectedRoutes from './components/ProtectedRoutes'
import EditProduct from './pages/EditProduct'
import DeleteProduct from './pages/DeleteProduct'

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

function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Admin />} />
      <Route path='/products/edit/:id' element={<EditProduct />} />
      <Route path='/products/delete/:id' element={<DeleteProduct />} />
    </Routes>
  )
}
