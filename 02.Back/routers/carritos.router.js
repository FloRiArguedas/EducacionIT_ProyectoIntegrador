import express from "express";
import controladoresCarrito from '../controllers/carritos.controllers.js'

const routerCarritos = express.Router()

routerCarritos.post ('/', controladoresCarrito.guardarCarrito)

export default routerCarritos