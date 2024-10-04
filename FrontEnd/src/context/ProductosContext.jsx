import { useState } from "react";
import { createContext } from "react";
import { helperPeticionesHttp } from "../helpers/helper.Peticiones.HTTP";
import { useEffect } from "react";

const ProductosContext = createContext()

const ProductosProvider = ({children}) => {

    const url= import.meta.env.VITE_BACKEND_PRODUCTOS

    const [productos, setProductos] = useState(null)

    const [productoaEditar, setProductoaEditar]  = useState(null)

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

    const crearProductoContext = async (nuevoProducto) => {
       
        try {

            console.log(nuevoProducto)

            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json'},
                body: JSON.stringify(nuevoProducto)
            }
    
    
            const newProduct = await helperPeticionesHttp (url, options)
    
            setProductos([...productos, newProduct])
            
        } catch (error) {
            console.error('CrearProductoContexto', error)
        }

    }


    const actualizarProductoContext = async (ProductoEditado) => {

        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type' : 'application/json'},
                body: JSON.stringify(ProductoEditado)
            }

            const UrlEdicion = url +  ProductoEditado.id

            const EditedProduct = await helperPeticionesHttp (UrlEdicion, options)

            const nuevoEstadoProductos = productos.map ( producto => producto.id === ProductoEditado.id ? ProductoEditado : producto)
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('ActualizarProductoContexto', error)
        }
    }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoaEditar,
        setProductoaEditar

    }
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export {ProductosProvider}
export default ProductosContext