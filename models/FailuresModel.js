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

  brand_name: {
    type: String,
   
  },
  failures_color:{
    type:String
  },
  failures_pay:{
    type:String
  },
  failures_date:{ 
    type:String
  }, 
   price: {
    type: String,
   
  },
   note: {
    type: String,
   
  },
  date: {
    type: String,
  
  },
  failuresstate: {
  
 } ,
 profileImg: {
        type: String
    }
    

})


module.exports = Failures = mongoose.model('failures', FailuresSchema)
