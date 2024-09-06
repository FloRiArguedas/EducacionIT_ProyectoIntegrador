import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NoEncontrado from './pages/NoEncontrado'
import Rutas from './routes/Rutas'

const App = () => {
  return (
    
    <BrowserRouter>

      <Rutas />

    </BrowserRouter>
  )
}

export default App