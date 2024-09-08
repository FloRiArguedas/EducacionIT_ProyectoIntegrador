import Card from "../components/Card";
import "./Inicio.scss";

const Inicio = () => {
  return (
    <main>
      <div className="Banner-Container-fixed">
        <img
          className="Banner-Container-fixed__HomeImage"
          src="/img/impresion3D.webp"
          alt="Impresion 3D en primera plana"
        />
      </div>

      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Conoce las figuras que tenemos disponibles</h1>
          <p>Se encontraron 12 figuras listas para entrega</p>
        </header>

        <div className="cards-container" id="cardsContainer">

          <Card />
        
        </div>
      </section>
    </main>
  );
};

export default Inicio;
