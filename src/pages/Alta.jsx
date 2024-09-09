import Tabla from "../components/Tabla"
import useTitulo from "../hooks/useTitulo"
import Formulario from "./Formulario"

const Alta = () => {

  useTitulo('Alta')

  return (
    <>
    <h1>Formulario Alta de Productos</h1>
    <h2>Agregar un producto</h2>
    <Formulario />
    <hr />
    <Tabla/>
    </>
  )
}

export default Alta