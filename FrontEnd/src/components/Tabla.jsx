import { useContext } from "react"
import './Tabla.scss'
import ProductosContext from "../context/ProductosContext"
import TablaFila from "./TablaFila"

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <table className="tabla-alta">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Detalles</th>
          <th>Foto</th>
          {/* <th>Precio</th>
          <th>Stock</th>
          <th>Envío</th> */}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          productos && productos.map (producto => (
            <TablaFila key ={producto.id} producto={producto} />
          ))
        }
      </tbody>

    </table>
  )
}

export default Tabla