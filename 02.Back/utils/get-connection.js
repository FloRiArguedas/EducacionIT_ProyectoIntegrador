import mongoose from 'mongoose';

const getConnection = async (uri_remota) => {

  try {
    await mongoose.connect(uri_remota);
    console.log('Conexión Exitosa')
  } catch (error) {
    console.log('Conexión Fallida', error)
    
  }
}

export default getConnection