const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const FailuresSchema = new Schema({
  customer_name: {
    type: String
  },
  failures_name: {
    type: String
  },
  failures_species: {
    type: String,
    required: true
  },
  brand_name: {
    type: String,
    required: true
  },
   price: {
    type: String,
    required: true
  },
   note: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  failuresstate: {
   type: String
 } 
})

module.exports = Failures = mongoose.model('failures', FailuresSchema)
