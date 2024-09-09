import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const CarritoContext = createContext()

const CarritoProvider = ({children}) => {

    const [ agregarAlCarrito, EliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    const agregarProductCarritoContext = async (producto) => {
                
    }

    const EliminarProductCarritoContext = async (id) => {
                
    }

    const data = {
        carrito,
        agregarProductCarritoContext,
        EliminarProductCarritoContext

    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoContext}

export default CarritoProvider