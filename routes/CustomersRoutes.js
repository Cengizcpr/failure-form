const express = require('express')
const customers = express.Router()
const cors = require('cors')
const Customer = require('../models/CustomersModel')
customers.use(cors())

customers.post('/cregister', (req, res) => {
  const today = new Date()
  const customerData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_no: req.body.phone_no,
    adress: req.body.adress,
    created: today
  }

  Customer.findOne({
    phone_no: req.body.phone_no
  })
    .then(user => {
      if (!user) {
       
          Customer.create(customerData)
            .then(user => {
             res.json({ status: user.first_name + 'Registered!' })
           res.json({ message: "false"})
            })
            .catch(err => {
              res.json({ message: "true"})
               
            })
       
      } else {
        res.json({ error: 'Customer already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
customers.get('/customerlist', (req, res) => {

  Customer.find({},function(err,objs){
    var dbs=objs[0];
    //console.log(dbs);
    return dbs
  })
    .then(user => {
      if (user) {
       
        res.json(user)
      } else {
        res.json({ error: 'Customer already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
customers.put('/customerlist', (req, res) => {
  
  const customerData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_no: req.body.phone_no,
    adress: req.body.adress,
    _id:req.body._id
  }
  Customer.update({_id:req.body._id},customerData,function(err,objs){ })
    .then(objs=> {
       
      res.json(objs)
    })
    .catch(err=>{
      res.json({ error: 'Customer already exists' })
    })
 

})
customers.post('/customerlist', (req, res) => {
  console.log(req.body._id)

  
 Customer.deleteOne({_id:req.body._id})
    .then(objs=> {
       
      res.json(objs)
    })
    .catch(err=>{
      res.json({ error: 'Customer already exists' })
    })
 

})


module.exports = customers
