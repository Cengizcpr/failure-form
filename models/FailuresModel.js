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
    
  },
  brand_name: {
    type: String,
   
  },
   price: {
    type: String,
   
  },
   note: {
    type: String,
   
  },
  date: {
    type: Date,
    default: Date.now
  },
  failuresstate: {
  
 } ,
 profileImg: {
        type: String
    }
    

})


module.exports = Failures = mongoose.model('failures', FailuresSchema)
