const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CustomerSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  phone_no: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  date: {
    type: String,
  
  }
})

module.exports = User = mongoose.model('customers', CustomerSchema)
