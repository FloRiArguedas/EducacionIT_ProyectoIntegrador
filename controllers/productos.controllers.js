
const getAll = (req, res)=> {
    res.send('Ok -> GET ALL (READ)')
}

const getOne = (req,res)=> {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> GET ONE (READ)')
}

const create = (req,res)=> {
    const producto =req.body
    console.log(producto)
    res.status(201).send('Ok -> POST (CREATE)')
}

const update = (req,res)=> {
    const id = req.params.id
    console.log(id)
    const productoEditado =req.body
    console.log(productoEditado)
    res.send('Ok -> PUT (UPDATE)')
}

const remove = (req,res)=> {
    const id = req.params.id
    console.log(id)
    res.send('Ok -> DELETE (DELETE)')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}