
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ProductosProvider } from './context/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
     <ProductosProvider>
          <App />
     </ProductosProvider>
)
