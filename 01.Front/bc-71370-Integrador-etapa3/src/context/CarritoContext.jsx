import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { helperPeticionesHttp } from "../helpers/helper.Peticiones.HTTP"

const CarritoContext = createContext()

const CarritoProvider = ({children}) => {

    const url = import.meta.env.VITE_BACKEND_CARRITOS

    const [ agregarAlCarrito, EliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])


    function EstaelProductoEnCarrito (producto) {
        const arrayProductsCarrito = carrito.filter(prod => prod.id === producto.id)
        return arrayProductsCarrito.length
    }

    function obtenerProductoDeCarrito (producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductCarritoContext =  (producto) => {
        
        if (!EstaelProductoEnCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            window.localStorage.setItem( 'carrito' , JSON.stringify(carrito))
        }
    }

    const EliminarProductDelCarritoContext =  (id) => {
        EliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const guardarCarritoContext =  async (carrito) => {
        console.log(carrito)
        console.log(JSON.stringify(carrito))

        try {

            const options = {
                method : 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(carrito)
            }
            
           const losProductosdelCarrito = await helperPeticionesHttp(url, options)
           console.log ('Estos son los productos del carrito',losProductosdelCarrito)

        } catch (error) {
            console.error ('Error al guardar los productos del carrito', error)
        }
    }
    
    const data = {
        carrito,
        agregarProductCarritoContext,
        EliminarProductDelCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }

export default CarritoContext