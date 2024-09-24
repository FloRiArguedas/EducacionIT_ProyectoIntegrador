import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/productosEsquema.js"

const ProductosModelo = mongoose.model('productos', ProductosEsquema)

const obtenerTodos = async () => {

    try {
        const productos = await ProductosModelo.find()
        console.log(productos)
        return productos
    } catch (error) {
       console.log('Error al obtener los productos', error)
    }
} 
const obtenerUno =  () => {
 
} 


const CrearProducto = () => {

} 

const actualizarProducto = () => {

} 

const deleteProducto = () => {

} 

export default {
    obtenerUno,
    obtenerTodos,
    CrearProducto,
    actualizarProducto,
    deleteProducto
}


