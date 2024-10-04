import mongoose from "mongoose";

const CarritosEsquema = mongoose.Schema(
    {
        carrito: Array
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default CarritosEsquema