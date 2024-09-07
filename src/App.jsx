import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NoEncontrado from './pages/NoEncontrado'
import Rutas from './routes/Rutas'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    
    <BrowserRouter>

      <Header />

      <Rutas />

      <Footer />

    </BrowserRouter>
  )
}

export default App