import express from 'express'
const routerProductos = express.Router()

//? GET ALL

routerProductos.get('/',(req,res)=> {
    res.send('Ok -> GET ALL (READ)')
})

//? GET ONE

routerProductos.get('/:id',(req,res)=> {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> GET ONE (READ)')
})

//? POST

routerProductos.post('/',(req,res)=> {
    const producto =req.body
    console.log(producto)
    res.status(201).send('Ok -> POST (CREATE)')
})

//? PUT

routerProductos.put('/:id',(req,res)=> {
    const id = req.params.id
    console.log(id)
    const productoEditado =req.body
    console.log(productoEditado)
    res.send('Ok -> PUT (UPDATE)')
})

//? DELETE

routerProductos.delete('/:id',(req,res)=> {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> DELETE (DELETE)')
})


export default routerProductos