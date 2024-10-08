import { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'
import './Card.scss'

const Card = ({producto}) => {

  const {agregarProductCarritoContext} = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    console.log('Agregando al carrito')
    agregarProductCarritoContext(producto)
  }


  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img src={producto.imagen} alt= {producto.nombre} className="card__image" />
        </div>
        <div className="card__content">
          <h2 className="card__heading"> {producto.nombre}  </h2>
          <div className="card__description">
            <p>"{producto.descripcion}"</p>
            <button className="card__description__buttonAC" onClick={() => handleAgregar(producto)}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </article>
    </div> 
  )
}

export default Card