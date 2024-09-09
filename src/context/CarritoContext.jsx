import { createContext } from "react"

const CarritoContext = createContext()

const CarritoProvider = ({children}) => {

    const agregarProductCarritoContext = async (producto) => {
                
    }

    const EliminarProductCarritoContext = async (id) => {
                
    }

    const data = {
        agregarProductCarritoContext,
        EliminarProductCarritoContext

    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoContext}

export default CarritoProvider