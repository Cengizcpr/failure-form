const express = require('express')
const failures = express.Router()
const cors = require('cors')
const Failures = require('../models/FailuresModel')
failures.use(cors())

failures.post('/fregister', (req, res) => {
  const today = new Date()
  const failureData = {
    customer_name: req.body.customer_name,
    failures_name: req.body.failures_name,
    failures_species: req.body.failures_species,
    brand_name: req.body.brand_name,
    note: req.body.note,
    price: req.body.price,
    created: today
  }

  Failures.findOne({
    failures_name: req.body.failures_name
  })
    .then(data => {
      if (!data) {
       
          Failures.create(failureData)
            .then(data => {
             res.json({ status: data.failures_name + 'Registered!' })
           res.json({ message: "false"})
            })
            .catch(err => {
              res.json({ message: "true"})
               
            })
       
      } else {
        res.json({ error: 'Failures already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
failures.get('/flist', (req, res) => {

  Failures.find({},function(err,objs){
    var dbs=objs[0];
    //console.log(dbs);
    return dbs
  })
    .then(data => {
      if (data) {
       
        res.json(data)
      } else {
        res.json({ error: 'Failures already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
module.exports = failures
