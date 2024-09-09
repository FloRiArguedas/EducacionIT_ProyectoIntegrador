import './Card.scss'

const Card = ({producto}) => {
  console.log(producto)
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
          </div>
        </div>
      </article>
    </div> 
  )
}

export default Card