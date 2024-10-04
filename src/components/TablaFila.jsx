import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ({producto}) => {

  const {setProductoaEditar} = useContext(ProductosContext)

  const handleEditar = (producto) => {
    console.log('Producto a Editar...', producto.id)
    setProductoaEditar(producto)
  }

  return (
   <tr>
    <td>{producto.nombre}</td>
    <td>{producto.descripcion}</td>
    <td>
      <img className="img-row" src={producto.imagen} alt={producto.nombre} />
    </td>
    <td>
      <button onClick={() => handleEditar(producto)}>Editar</button>
      <button>Borrar</button>
    </td>
   </tr>
  )
}

export default TablaFila