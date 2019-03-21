import mongoose, { Schema } from 'mongoose'

const StudentSchema = new Schema({
  firstname: {
    type: string,
    required: true
  },
  surname: {
    type: string,
    required: true
  },
  age: {
    type: string,
    required: true
  },
  grade: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Student = mongoose.model("students", StudentSchema)
