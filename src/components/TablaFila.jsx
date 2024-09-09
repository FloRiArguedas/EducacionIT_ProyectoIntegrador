import './TablaFila.scss'

const TablaFila = ({producto}) => {
  return (
   <tr>
    <td>{producto.nombre}</td>
    <td>{producto.descripcion}</td>
    <td>
      <img className="img-row" src={producto.imagen} alt={producto.nombre} />
    </td>
    <td>
      <button>Editar</button>
      <button>Borrar</button>
    </td>
   </tr>
  )
}

export default TablaFila