//MANEJO DE ERRORES 
const handleObjMongoToObjJs = (elemento) => {
    return JSON.parse(JSON.stringify(elemento))
}

export default handleObjMongoToObjJs