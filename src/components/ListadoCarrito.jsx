import "./ListadoCarrito.scss";
import React, { useContext } from "react";
import ItemCarrito from "./ItemCarrito";
import CarritoContext from "../context/CarritoContext";


const ListadoCarrito = () => {

  const { carrito, limpiarCarritoContext } = useContext(CarritoContext);

  const handleComprar = () => {

  }

  const handleLimpiarCarrito = () => {
    console.log('Vaciando el carrito')
    limpiarCarritoContext()
  }

  return (
    <>
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Figura</th>
            <th>Nombre</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length <= 0 ? (
            <tr>
              <td colSpan={3}>No hay productos agregados al carrito</td>
            </tr>
          ) : (
            carrito.map((producto, idx) => (
              <ItemCarrito key={idx} producto={producto} />
            ))
          )}
        </tbody>
      </table>
      <hr />
      {!carrito.length <= 0 && (
        <>
          <button onClick={handleLimpiarCarrito} className="bttnListado">VACIAR</button>
          <button className="bttnListado">COMPRAR</button>
        </>
      )}
    </>
  );
};

export default ListadoCarrito;
