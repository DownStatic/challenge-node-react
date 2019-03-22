import mongoose, { Schema } from 'mongoose'

const Student = new Schema({
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Student", Student)
