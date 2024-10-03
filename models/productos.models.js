import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/productosEsquema.js"

const ProductosModelo = mongoose.model('productos', ProductosEsquema)

const obtenerTodos = async () => {

    try {
        const productos = await ProductosModelo.find()
        return productos
    } catch (error) {
       console.log('Error al obtener los productos', error)
    }
} 
const obtenerUno = async (id) => {
    try {
        
        const producto = await ProductosModelo.findById(id)
        console.log(producto)
        return producto

    } catch (error) {
        console.log('Error al obtener el producto', error)
    }
 
} 


const CrearProducto =  async (producto) => {

    try {
        const productoCreado = await ProductosModelo.create(producto)
        //console.log(productoCreado)
        return productoCreado
        
    } catch (error) {
        console.log('Error al crear el producto', error)
    }

} 

const actualizarProducto = async (id,productoAEditar) => {

    try {
        const options = { new: true}
        const productoEditado = await ProductosModelo.findByIdAndUpdate(id, productoAEditar, options)
        return(productoEditado)
        
    } catch (error) {
        console.log('Error al actualizar el producto', error)
    }

} 

const deleteProducto = async (id) => {

    try {
        const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        return(productoBorrado)

    } catch (error) {
        console.log('Error al eliminar el producto', error)
    }

} 

export default {
    obtenerUno,
    obtenerTodos,
    CrearProducto,
    actualizarProducto,
    deleteProducto
}


