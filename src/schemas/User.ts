import { randomUUID } from 'crypto'
import { ObjectId } from 'mongodb'
import { Schema, model, models } from 'mongoose'


const NetworksSchema = new Schema({
  network_id: {
    type: Number, 
    trim: true      
  },
  network_name: {
    type: String, 
    trim: true
  },
  network_url: {
    type: String, 
    trim: true
  }
})

const MoviesSchema = new Schema({
  level_id: String,
  level_correct: Boolean, 
  level_errors: Number,
  level_points: Number
})
const SeriesSchema = new Schema({
  level_id: String,
  level_correct: Boolean, 
  level_errors: Number,
  level_points: Number
})
const VideogamesSchema = new Schema({
  level_id: String,
  level_correct: Boolean, 
  level_errors: Number,
  level_points: Number
})

const UserGame = new Schema ({
  movies: {
    type: [MoviesSchema]
  }, 
  series: {
    type: [SeriesSchema]
  },
  videogames: {
    type: [VideogamesSchema]
  }
})

const userSchema = new Schema({
  user_id: {
    type: String,
    required: true, 
    unique: true,
    trim: true
  }, 
  user_name: {
    type: String, 
    required: [true, 'userName is Required'], 
    unique: true,
    trim: true
  },
  user_email: {
    type: String, 
    required: [true, 'Email is Required'], 
    unique: true,
    trim: true
  },
  user_password: {
    type: String, 
    required: [true, 'password is Required'],
    trim: true
  },
  user_avatar: {
    type: String, 
    default: '/AdivinaQue/akxmwc0cpoffp1avtg8h.webp',
    trim: true
  },
  user_networks: {
    type: [NetworksSchema],
    default: [
      {
        network_id: 1,
        network_name: 'Twitter',
        network_url: ''
      },
      {
        network_id: 2,
        network_name: 'instagram',
        network_url: ''
      },
      {
        network_id: 3,
        network_name: 'Twitch',
        network_url: ''
      },
      {
        network_id: 4,
        network_name: 'Youtube',
        network_url: ''
      },
    ]
  },
  user_datagame: {
    type: UserGame,
    default: {
      movies: [],
      series: [],
      videogames:[]
    }
  },
},
{
  timestamps: true
})

export default models.User || model('User', userSchema)