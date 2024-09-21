import express from 'express'
import controladores from '../controllers/productos.controllers.js'
const routerProductos = express.Router()

//? GET ALL

routerProductos.get('/', controladores.getAll)

//? GET ONE

routerProductos.get('/:id',controladores.getOne)

//? POST

routerProductos.post('/', controladores.create)

//? PUT

routerProductos.put('/:id', controladores.update)

//? DELETE
routerProductos.delete('/:id', controladores.remove)


export default routerProductos