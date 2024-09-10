import './ItemCarrito.scss'
import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({producto}) => {

    const {EliminarProductDelCarritoContext} = useContext(CarritoContext)

    const handleEliminar = (id) => {
        EliminarProductDelCarritoContext(id)
    }

  return (
      <tr>
         <td>
             <img src={producto.imagen} alt={producto.nombre} className = "imgCarrito"/>
         </td>
         <td>{producto.nombre}</td>
         <td>{producto.cantidad}</td>
         <td>
            <button className = "bttnCarrito" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr> 
  )
}

export default ItemCarrito