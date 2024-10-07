import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contáctenos')
  
  return (
   <>
    <div className="Banner-Container-fixed">
      <img className="Banner-Container-fixed__ContactImage" src="/img/mano3D.webp" alt="Mano de humano, tocando la mano en 3D del modelo"/>
    </div>

    <div className="head">
      <h1>COMUNICATE CON NOSOTROS</h1>
      <p>
        ¿Tienes una figura en mente? 
      </p>
      <p>Cuéntanos los detalles y haremos tu deseo
        realidad.</p>
    </div>

    {/* <!-- FORMULARIO DE CONTACTO --> */}
    <div className="Form-Container">
      <div className="Form-Container__Form-contact">
        <form>
          <div className="Form-Container__Form-contact__grupo">
            <label htmlFor="label-nombre">Nombre: * </label>
            <input
              type="text"
              name="nombre"
              id="label-nombre"
              placeholder="Eje: Floricela"
              required
            />
          </div>

          <div className="Form-Container__Form-contact__grupo">
            <label htmlFor="label-apellido">Apellido: </label>
            <input
              type="text"
              name="apellido"
              id="label-apellido"
              placeholder="Eje: Arguedas"
            />
          </div>

          <div className="Form-Container__Form-contact__grupo">
            <label htmlFor="label-email">Correo Electrónico: * </label>
            <input
              type="email"
              name="email"
              id="label-email"
              placeholder="Eje: 3d4u.servicioalcliente@gmail.com"
              required
            />
          </div>

          <div className="Form-Container__Form-contact__grupo">
            <label htmlFor="label-numero">Número de teléfono: </label>
            <input type="tel" name="numero" id="label-numero" />
          </div>

          <div className="Form-Container__Form-contact__grupo">
            <div id="description">
              <label htmlFor="label-descripcion">Cuéntanos los detalles: * </label>
              <textarea
                name="detalles"
                id="label-descripcion"
                cols="20"
                rows="10"
                placeholder="Describa aquí lo que desea en su pedido"
              ></textarea>
            </div>
          </div>

          <div className="Form-Container__Form-contact__grupo">
            <div className="campo_requerido_container">
              <p id="requiered">* Campos requeridos</p>
            </div>
            <div className="button">
              <button id="boton_form">Enviar Solicitud</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    {/* <!-- Medios de Comunicacion --> */}

    <div className="bloque-MediosyRedes">
      <div>
        <h2>Contáctanos en nuestros medios de comunicación</h2>
        <div className="bloque-MediosyRedes__MediosComunicacion">
          <div className="bloque-MediosyRedes__grupo-canal">
            <p className="whatsapp">
              <i className="fa-brands fa-whatsapp"></i> Escríbenos a nuestro <a href="https://wa.me/50670128588" target="_blank"><i> WhatsApp</i></a>
            </p>
          </div>

          <div className="bloque-MediosyRedes__grupo-canal">
            <p className="email">
              <i className="fa-solid fa-envelope"></i> Escríbenos a nuestro <a href="mailto:3d4u.servicioalcliente@gmail.com" target="_blank"><i> Correo Electrónico</i></a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Siguenos en nuestras Redes Sociales</h2>

        <div className="bloque-MediosyRedes__RedesSociales">
          <div className="bloque-MediosyRedes__grupo-canal">
            <p className="instagram">
              <i className="fa-brands fa-instagram"></i> Instagram: <a href="https://www.instagram.com/3d4u.cr/?igsh=OWdnOWltNno5bDR3" target="_blank"> @3D4U.cr</a>
            </p>
          </div>

          <div className="bloque-MediosyRedes__grupo-canal">
            <p className="tiktok">
              <i className="fa-brands fa-tiktok"></i> Tik Tok:<a href="https://www.tiktok.com/@3d4u.cr" target="_blank"> @3D4U.cr</a>
            </p>
          </div>
        </div>
      </div>
    </div>

   </>
  )
}

export default Contacto