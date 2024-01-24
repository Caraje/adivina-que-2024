// import { URL_BASE } from '@/utils/env';
import mongoose from 'mongoose'

const MONGODB_URI: string = process.env.MONGODB_URI || ''
if(process.env.MONGODB_URI === '') {
  throw new Error('No esta definida la URL de Mongo')
}
export const connectDB = async () => {
  try {
    const { connection} = await mongoose.connect(MONGODB_URI)
    if(connection.readyState === 1){
      console.log('MongoDB Connected');
      return Promise.resolve(true)
    }
    
  } catch (error) {
    console.log(error)
    return Promise.reject(false)
  }
}

