import { useContext, useState } from "react";
import ProductosContext from "../context/ProductosContext";

const Formulario = () => {
  const formInit = {
    id: null,
    nombre: "",
    descripcion: "",
    imagen: "",
  };

  const [form, setForm] = useState(formInit);

  const {crearProductoContext} = useContext(ProductosContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HandleSubmit")

    try {
      if (form.id === null) {
        console.log('Creando Producto')
        crearProductoContext(form)
      } else {
        console.log('Actualizando Producto')
      }
      handleReset()

    } catch (error) {}
  };

  const handleChange = (e) => {
    console.log(e.target.type);
    const { type, name, value } = e.target;
    setForm({
      ...form,
     //[name] : type === 'checkbox' ? checked : value
    })
  };


  const handleReset = () => {
    console.log('Limpiando')
  };

  return (
    <>
      <h3>Agregar : Editar</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-descripcion">Descripcion</label>
          <input
            type="text"
            name="descripcion"
            id="lbl-descripcion"
            value={form.descripcion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input
            type="text"
            name="foto"
            id="lbl-foto"
            value={form.imagen}
            onChange={handleChange}
          />
        </div>
        <button>Guardar</button>
        <button onClick={handleReset}>Limpiar</button>
      </form>
    </>
  );
};

export default Formulario;
