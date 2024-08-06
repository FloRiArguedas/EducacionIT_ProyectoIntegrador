import './sass/main.scss'
import Handlebars from 'handlebars'

const inicio = async () => {


        //Petición asincrónica
    
        try {
             
        const respuesta = await fetch ('templates/card.hbs')
    
            if (!respuesta.ok){
                throw new Error ('No se logró obtener la plantilla')
            }

            const plantilla = await respuesta.text()

            //Compilacion de la plantilla con Handlebars

            const template = Handlebars.compile(plantilla)

            //Generación de la plantilla

            // Petición asincrónica para conseguir la data

            //const respuestaBackEnd = await fetch ('http://localhost:8080/productos/') //LOCAL
            const respuestaBackEnd = await fetch ('https://66b1a5e21ca8ad33d4f4aa3d.mockapi.io/integradorE2/Productos/') //MOCKAPI

            if (!respuestaBackEnd.ok){
                throw new Error ('No se lograron obtener los productos' , respuestaBackEnd.status)
            }

            const dataProductos = await respuestaBackEnd.json()

            const data = { productos: dataProductos }

            const html =  template(data)

            const ContainerCards = document.querySelector('cardsContainer')

            cardsContainer.innerHTML = html
    
        } catch (e) {
            console.log ('Hubo un error l-50')
        }
}

window.addEventListener('DOMContentLoaded' , inicio) 