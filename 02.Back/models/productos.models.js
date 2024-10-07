import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/productosEsquema.js"

const ProductosModelo = mongoose.model('productos', ProductosEsquema)

const obtenerTodos = async () => {

    try {
        const productos = await ProductosModelo.find()
        return productos
    } catch (error) {
        throw error
    }
} 

const obtenerUno = async (id) => {
    try {
        
        const producto = await ProductosModelo.findById(id)
        console.log(producto)
        return producto

    } catch (error) {
        throw error
    }
 
} 

const CrearProducto =  async (producto) => {

    try {
        const productoCreado = await ProductosModelo.create(producto)
        return productoCreado
        
    } catch (error) {
        throw error
    }

} 

const actualizarProducto = async (id,productoAEditar) => {

    try {
        const options = { new: true}
        const productoEditado = await ProductosModelo.findByIdAndUpdate(id, productoAEditar, options)
        return(productoEditado)
        
    } catch (error) {
        throw error
    }
} 

const deleteProducto = async (id) => {

    try {
        const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        return(productoBorrado)

    } catch (error) {
        throw error
    }
} 

export default {
    obtenerUno,
    obtenerTodos,
    CrearProducto,
    actualizarProducto,
    deleteProducto
}


