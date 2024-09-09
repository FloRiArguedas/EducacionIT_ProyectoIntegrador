import { useState } from "react";
import { createContext } from "react";
import { helperPeticionesHttp } from "../helpers/helper.Peticiones.HTTP";
import { useEffect } from "react";

const ProductosContext = createContext()

const ProductosProvider = ({children}) => {

    const url= import.meta.env.VITE_BACKEND_PRODUCTOS

    const [productos, setProductos] = useState(null)

    useEffect (() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {

        try {

            const prods = await helperPeticionesHttp(url, {})

            setProductos(prods)

        } catch (error) {
            console.error('[getAllProducts]', error)
        }
    }

    const crearProductoContext = (nuevoProducto) => {
        console.log(nuevoProducto)

    }

    const data = {
        productos,
        crearProductoContext
    }
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export {ProductosProvider}
export default ProductosContext