var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000
var path = require("path");

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/faiulereform'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')
var Customers=require('./routes/CustomersRoutes')
var Failures=require('./routes/FailuresRoutes')
app.use('/users', Users)
app.use('/customers',Customers)
app.use('/failures',Failures)
app.use(express.static(path.join(__dirname,'public')))
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
