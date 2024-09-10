import { useContext } from "react"
import useTitulo from "../hooks/useTitulo"
import CarritoContext from "../context/CarritoContext"

const Carrito = () => {

  useTitulo('Carrito')
  const {carrito, eliminarCarrito, guardarCarritoContext} = useContext(CarritoContext)

  return (
    <>
    <h1>Productos en el Carrito</h1>
    <hr />
    </>
  )
}

export default Carrito