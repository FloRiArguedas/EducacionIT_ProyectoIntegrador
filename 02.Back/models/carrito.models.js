import mongoose from "mongoose"
import CarritosEsquema from "./esquemas/CarritosEsquema.js"

const CarritosModelo = mongoose.model('carritos', CarritosEsquema)

const crearCarrito = async (carrito) => {

    try {
        const carritoCreado = new CarritosModelo ({carrito})
        const carritoGuardado = await carritoCreado.save() //Guardo el carrito en la DB

    } catch (error) {
        console.log('No fue posible crear el carrito', error)
    }
}

export default {
    crearCarrito
}
