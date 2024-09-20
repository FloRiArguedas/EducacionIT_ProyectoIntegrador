import express from 'express'
const routerProductos = express.Router()

//? GET ALL

routerProductos.get('/api/v1/productos',(req,res)=> {
    res.send('Ok -> GET ALL (READ)')
})

//? GET ONE

//? POST

//? PUT

//? DELETE


export default routerProductos