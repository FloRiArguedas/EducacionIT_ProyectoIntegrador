import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({producto}) => {

    const {EliminarProductDelCarritoContext} = useContext(CarritoContext)

    const handleEliminar = (id) => {
        EliminarProductDelCarritoContext(id)
    }

  return (
    //<h1>Productos en el carrito</h1>
      <tr>
         <td>
             <img src={producto.imagen} alt={producto.nombre} width="50px" />
         </td>
         <td>{producto.nombre}</td>
         <td>{producto.cantidad}</td>
         <td>
            <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr> 
  )
}

export default ItemCarrito