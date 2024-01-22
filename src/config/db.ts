import mongoose, { connect, connection } from 'mongoose'

const URL_BASE= process.env.MONGODB_URL || ''

type conn = {
  isConnected: boolean | number
}
const conn: conn = {
  isConnected: false
}

export async function connectDB() {
  if(conn.isConnected) return
  const db = await connect(URL_BASE)
  console.log(db.connection.db.databaseName)
  conn.isConnected = db.connections[0].readyState
}

connection.on('connected', () => {
console.log('Se ha conectado con Mongoose')
})

connection.on('error', (err) => {
  console.log('Hay un error en la conexion con Mongoonse: ', err)
})