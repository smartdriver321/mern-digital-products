import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import DeleteProduct from './pages/DeleteProduct'
import Cart from './pages/Cart'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Shop from './pages/Shop'
import ProtectedRoutes from './components/ProtectedRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />

        <Route
          path='/admin/*'
          element={
            <ProtectedRoutes>
              <AdminRoutes />
            </ProtectedRoutes>
          }
        />
      </Routes>
      {isAdminRoute ? '' : <Footer />}
    </>
  )
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Admin />} />
      <Route path='/products/create' element={<CreateProduct />} />
      <Route path='/products/edit/:id' element={<EditProduct />} />
      <Route path='/products/delete/:id' element={<DeleteProduct />} />
    </Routes>
  )
}
