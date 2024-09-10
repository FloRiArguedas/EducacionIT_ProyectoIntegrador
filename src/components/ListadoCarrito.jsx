import './ListadoCarrito.scss'
import React, { useContext } from "react";
import ItemCarrito from "./ItemCarrito";
import CarritoContext from "../context/CarritoContext";
const ListadoCarrito = () => {
  const { carrito, eliminarCarrito, guardarCarritoContext } =
    useContext(CarritoContext);

  return (
    <table className="tabla-carrito">
      <thead>
        <tr>
          <th>Figura</th>
          <th>Nombre</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {
            carrito.length <= 0 ? (
                <tr>
                    <td>
                        No hay productos agregados al carrito
                    </td>
                </tr>
            ): (
                carrito.map((producto, idx) => (
                    <ItemCarrito key={idx} producto={producto} />
                ) )
            )
        }
      </tbody>
    </table>
  );
};

export default ListadoCarrito;
