const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Todo', TodoSchema)