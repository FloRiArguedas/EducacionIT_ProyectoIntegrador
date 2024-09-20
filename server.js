import express from 'express'
import 'dotenv/config'
import routerProductos from './routers/productos.router.js'

//VARIABLES
const app = express()
const PORT = process.env.PORT || 2222


//RUTAS

app.use('/',routerProductos)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
