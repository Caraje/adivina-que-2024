import mongoose from 'mongoose'

const URL_BASE= process.env.MONGODB_URI || ''
if(URL_BASE === '') {
  throw new Error('No esta definida la URL de Mongo')
}
export const connectDB = async () => {
  try {
    const { connection} = await mongoose.connect(URL_BASE)
    if(connection.readyState === 1){
      console.log('MongoDB Connected');
      return Promise.resolve(true)
    }
    
  } catch (error) {
    console.log(error)
    return Promise.reject(false)
  }
}

