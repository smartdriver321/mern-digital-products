import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import DeleteProduct from './pages/DeleteProduct'
import ProtectedRoutes from './components/ProtectedRoutes'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />

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
      <Route path='/products/create' element={<CreateProduct />} />

      <Route path='/products/edit/:id' element={<EditProduct />} />
      <Route path='/products/delete/:id' element={<DeleteProduct />} />
    </Routes>
  )
}
