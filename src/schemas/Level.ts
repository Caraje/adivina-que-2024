import { Schema, model, models } from 'mongoose'
import { randomUUID } from 'crypto'

const lvlImages = new Schema({
  img: {
    type: String,
    required: [true, 'Se necesita una url de imagen para la pista'],
    trim: true
  }
})

const lvlClue = new Schema({
  clue: {
  type: String, 
  required: [true, 'Se necesita una pista para el nivel, la primera debe ser vacia'],
  trim: true
  }
})
const levelSchema = new Schema({
  level_id: {
    type: 'UUID',
    default: randomUUID(),
    required: true,
    unique: true,
    trim: true
  },
  levelCategory: {
    type: String,
    enum: {
      values: ['movies', 'series', 'videogames'],
      message: '{VALUE} No es una categoria valida'
    },
    required: [true, 'Se requiere una categoria valida']
  },
  level_answers: {
    type: [String],
    required: [true, 'Se requiere al menos un titulo como respuesta.'],
    trim: true
  }, 
  level_images: {
    type: [lvlImages],
    required: [true,'Se encesitan 5 imagenes en total'],
    trim: true
  },
  image_correct: {
    type: String,
    required: [true, 'Se requiere introducir una imagen para la respuesta correcta'],
    trim: true
  }, 
  level_clue: {

  }
})