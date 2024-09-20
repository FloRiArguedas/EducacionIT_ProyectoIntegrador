import express from 'express'
import 'dotenv/config'
import routerProductos from './routers/productos.router.js'

//VARIABLES
const app = express()
const PORT = process.env.PORT || 2222

//MIDDLEWARE
app.use(express.json())


//RUTAS

app.use('/api/v1/productos',routerProductos)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('*',(req,res)=> {
  res
    .status(404)
    .json({
      ruta:  `${req.url}`,
      metodo: `${req.method}`,
      mensaje: 'Recurso no existente'
    })
})

app.listen(PORT, (err) => {
  if (err) throw new Error('No fue posible levantar el servidor', err)
    console.log( `Servidor funcionando en : http://localhost:${PORT}`)
})
