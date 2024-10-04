import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const CarritoContext = createContext()

const CarritoProvider = ({children}) => {

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

    const guardarCarritoContext =  () => {
        console.log(carrito)
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