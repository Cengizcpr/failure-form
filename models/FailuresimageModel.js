const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const FailuresimageSchema = new Schema({
   
 filename: {
  type: String,
  required: true
},
originalname: {
  type: String,
  required: true
},
customer_name:{
  type: String,
  required: true
}


},{timestamps: true})


module.exports = Failuresimage = mongoose.model('failuresimage', FailuresimageSchema)
