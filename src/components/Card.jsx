import './Card.scss'

const Card = () => {
  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img src="{{imagen}}" alt="{{nombre}}" className="card__image" />
        </div>
        <div className="card__content">
          <h2 className="card__heading"> "{'{nombre}'}"  </h2>
          <div className="card__description">
            <p>"{'{descripcion}'}"</p>
          </div>
        </div>
      </article>
    </div> 
  )
}

export default Card