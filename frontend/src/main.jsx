import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

import './index.css'
import App from './App.jsx'
import { CartProvider } from '../context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SnackbarProvider>
  </BrowserRouter>
)
