import mongoose from "mongoose";

//CREACIÓN DEL ESQUEMA

const ProductosEsquema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    foto: String,
    precio: Number,
    stock: Number
},
{
    timestamps: true,
    versionKey: false
}

)

export default ProductosEsquema