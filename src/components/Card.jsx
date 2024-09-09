import './Card.scss'

const Card = ({producto}) => {

  const handleAgregar = (producto) => {
    console.log(producto)
    //agregarProductCarritoContext(producto)
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
            <button onClick={() => handleAgregar(producto)}>Agregar al Carrito</button>
          </div>
        </div>
      </article>
    </div> 
  )
}

export default Card