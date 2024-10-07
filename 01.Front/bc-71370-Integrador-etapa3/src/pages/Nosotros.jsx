import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {
  useTitulo('Nosotros')

  return (
    <>
      <div className="Banner-Container">
        <img className="Banner-Container__usImage" src="/img/Equipodetrabajo3D.webp" alt="Equipo de personas trabajando en una impresion 3D mujer en primera plana sonriendo"/>
      </div>

    <div className="Head-section">
     {/*  <!-- Head-section --> */}
      <h1>NOSOTROS SOMOS</h1>

      <div className="contenedor_logo">
        <img
          className="logo"
          src="/img/Logo3D4UOriginal.webp"
          alt="Logo 3D4U Orginal Morado con Amarillo"
        />
      </div>
      {/* <!-- Head-section --> */}
    </div>

    <div className="Info-section">
     {/*  <!-- INICIO Info-section --> */}
      <p>
        En nuestra empresa, convertimos los sueños en una realidad palpable. Nos
        dedicamos a diseñar, imprimir y pintar para vos figuras en 3D detalladas
        que capturan la esencia de tus personajes favoritos y las pasiones que
        te inspiran. Desde héroes de comics hasta criaturas mitológicas, cada
        pieza es una obra de parte personalizada que puedes coleccionar y
        atesorar.
      </p>

      <div className="History_section">
        <h2 className="History_section__tittle">Nuestra Historia</h2>

        <h3>¿Cómo comenzamos?</h3>

        <p>
          Nuestra aventura comenzó como la historia de dos geeks apasionados por
          las series, películas, animé y personajes que nos encantan. En
          nuestros ratos libres, siempre disfrutábamos creando cosas artísticas
          juntos, y un día, decidimos dar el salto e invertir en una impresora
          3D. La idea era simple: imprimir y pintar todos los personajes que
          adoramos para coleccionarlos y llenar nuestra casa de magia, alegría,
          personalización y recuerdos.
        </p>

        <p>
          Lo que empezó como un proyecto personal rápidamente ganó atención
          cuando compartimos fotos de nuestras creaciones con amigos y en redes
          sociales. La respuesta fue abrumadora; ¡a todos les encantaron! Poco a
          poco, comenzamos a recibir pedidos, y lo que era un hobbie se
          transformó en una emocionante aventura empresarial.
        </p>

        <p>
          Hoy, estamos orgullosos de convertir nuestro tiempo de esparcimiento
          en una fuente de alegría para otros. Cada figura que diseñamos,
          imprimimos y pintamos es una obra de amor, hecha para que puedas tener
          en tus manos esos personajes que tanto te gustan. Así nació nuestra
          empresa, dedicada a crear figuras en 3D que no solo decoran espacios,
          sino que también cuentan historias y despiertan pasiones.
        </p>
      </div>
      <div className="Info-section__cardsMV">
        <div className="Info-section__Mision">
          <h2>Misión</h2>

          <p>
            Ofrecer la oportunidad única de tener en tus manos figuras que no
            solo reflejan tus intereses, sino que también añaden un toque de
            creatividad y exclusividad a tus espacios.
          </p>
        </div>

        <div className="Info-section__Vision">
          <h2>Visión</h2>

          <p>
            Materializar tus deseos y transformar tus ideas en esculturas
            impresionantes que puedas disfrutar y exhibir con orgullo.
          </p>
        </div>
      </div>
      {/* <!-- FIN CARS MyV --> */}

      <div className="Counters">
        {/* <!-- INICIO SECTION COUNTER --> */}
        <div className="Counters__Numbers2024">
          <h3>2024</h3>
          <p>
            Fundada a inicios de 2024, ahora gracias a la virtualidad, tomamos
            pedidos de cualquier parte del mundo y realizamos envíos globales.
          </p>
        </div>

        <div className="Counters__Numbers25">
          <h3>+25</h3>
          <p>
            En menos de 6 meses ya hemos realizado más de 25 entregas de figuras
            a nuestros clientes satisfechos.
          </p>
        </div>
{/* 
        <!-- FIN SECTION COUNTER --> */}
      </div>

      <div className="Creation-section">
        <h2>Creación del producto</h2>

        <p>
          Cada figura que realizamos es una obra personalizada para nuestros
          clientes, tratada con el mismo cariño y detalle como si fuera para
          nosotros mismos. Nos apasiona cada paso del proceso: desde la
          selección y diseño de la figura, su impresión y tratamiento, hasta la
          meticulosa etapa de pintura y curación. Finalmente, envolvemos cada
          pieza con esmero, asegurándonos de que llegue en perfectas
          condiciones. Sabemos que estas figuras se convertirán en parte
          importante de los espacios y recuerdos de nuestros clientes, y por eso
          nos esforzamos en entregarles siempre lo mejor. Cada creación es una
          manifestación de nuestra dedicación y amor por lo que hacemos,
          destinada a ser atesorada por quienes la reciben.
        </p>
      </div>
      {/* <!-- FIN  CREATION SECTION --> */}
    </div>
    {/* <!-- FIN Info-section --> */}

    <div className="Images-section">
      <h2>De tus deseos a la realidad</h2>
      <div className="Images-section__Steps-Container">
        <div className="Images-section__images-container">
          <div className="Images-section__images-container__card">
            <h3>Diseño</h3>
            <img
              src="/img/diseño.webp"
              alt="Hombre diseñando un dinosaurio 3D en un computador"
              className="Images-section__images-container__images"
            />
          </div>
          <div className="Images-section__images-container__card">
            <h3>Creación</h3>
            <img
              src="/img/creacion.webp"
              alt="Mujer con figura 3D en la mano, detallandola en color amarillo"
              className="Images-section__images-container__images"
            />
          </div>
          <div className="Images-section__images-container__card">
            <h3>Entrega</h3>
            <img
              src="/img/entrega.webp"
              alt="Hombre entregando una caja rotulada de frágil a una chica, ambos felices"
              className="Images-section__images-container__images"
            />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Nosotros