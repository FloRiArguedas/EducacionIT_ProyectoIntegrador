import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NoEncontrado from './pages/NoEncontrado'
import Rutas from './routes/Rutas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <BrowserRouter>

      <Navbar />

      <Rutas />

      <Footer />

    </BrowserRouter>
  )
}

export default App