import express from 'express'
import 'dotenv/config'
import routerProductos from './routers/productos.router.js'
import getConnection from './utils/get-connection.js';
import cors from 'cors'
import routerCarritos from './routers/carritos.router.js';

//VARIABLES
const app = express()
const PORT = process.env.PORT || 2222
const uri_remota = process.env.URI_MONGO


//MIDDLEWARE
app.use(express.json())
app.use(cors())


//RUTAS

app.use('/api/v1/productos',routerProductos)
app.use('/api/v1/carritos',routerCarritos)


app.get('/', (req, res) => {
  res.redirect('/api/v1/productos')
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
  getConnection(uri_remota)
})
