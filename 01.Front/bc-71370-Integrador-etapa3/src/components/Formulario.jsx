import './Formulario.scss'
import { useContext, useEffect, useState } from "react";
import ProductosContext from "../context/ProductosContext";

const Formulario = () => {
  const formInit = {
    id: null,
    nombre: "",
    descripcion: "",
    imagen: "",
  };

  const [form, setForm] = useState(formInit);

  const {crearProductoContext, actualizarProductoContext, productoaEditar, setProductoaEditar} = useContext(ProductosContext)

  useEffect (() => {
    productoaEditar ? setForm(productoaEditar) : setForm (formInit)
  }, [productoaEditar])
  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log("HandleSubmit")

    try {
      if (form.id === null) {
        console.log('Creando Producto')
        await crearProductoContext(form)
      } else {
        console.log('Actualizando Producto')
        await actualizarProductoContext(form)
      }
      handleReset()

    } catch (error) {
      console.error('[handleSubmit]', error)
    }
  };

  const handleChange = (e) => {
    console.log(e.target.type);
    const { type, name, value } = e.target;
    setForm({
      ...form,
     [name] : type === 'checkbox' ? checked : value
    })
  };


  const handleReset = () => {
    console.log('Limpiando')
    setForm(formInit)
    setProductoaEditar(null)
  };

  return (
    <>
      <h3>Agregar : Editar</h3>

      <form className='form-alta' onSubmit={handleSubmit}>
        <div>
          <label className='lbl_form' htmlFor="lbl-nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='lbl_form' htmlFor="lbl-descripcion">Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            id="lbl-descripcion"
            value={form.descripcion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='lbl_form' htmlFor="lbl-imagen">Foto:</label>
          <input
            type="text"
            name="imagen"
            id="lbl-imagen"
            value={form.imagen}
            onChange={handleChange}
          />
        </div>
        <button className= "bttn-SC">Guardar</button>
        <button className= "bttn-SC" onClick={handleReset}>Limpiar</button>
      </form>
    </>
  );
};

export default Formulario;
