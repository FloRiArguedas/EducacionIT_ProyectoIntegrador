import modelos from '../models/productos.models.js'

const getAll = async (req, res)=> {
    try {
        const productos =  await modelos.obtenerTodos()
        res.json({productos})

    } catch (error) {
        console.log( 'No fue posible extraer los productos', error)
    } 
}

const getOne =  async (req,res)=> {
    const id = req.params.id

    try {
        const producto =  await modelos.obtenerUno(id)
        res.json({producto})
    } catch (error) {
        console.log( 'No fue posible extraer el producto', error)
    }
}

const create = async (req,res)=> {
    const producto =req.body

    try {
        const productoCreado = await modelos.CrearProducto(producto)
        res.status(201).send('Ok -> POST (CREATE)')
    } catch (error) {
        console.log( 'No fue posible crear el producto', error)
    }
}

const update = async  (req,res)=> {
    const id = req.params.id
    const productoEditado =req.body

    try {
        const ProductoActualizado = await modelos.actualizarProducto(id, productoEditado)
        res.send('Ok -> PUT (UPDATE)')
        
    } catch (error) {
        console.log( 'No fue posible actualizar el producto', error)
    }
}

const remove = async (req,res)=> {
    const id = req.params.id
    console.log(id)

    try {
        const productoBorrado = await modelos.deleteProducto(id)
        res.send('Ok -> DELETE (DELETE)')
    } catch (error) {
        console.log( 'No fue posible eliminar el producto', error)
    }
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}