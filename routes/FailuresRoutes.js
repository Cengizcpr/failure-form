const express = require('express')
const failures = express.Router()
const cors = require('cors')
const Failures = require('../models/FailuresModel')
const FailuresImage=require('../models/FailuresimageModel')
failures.use(cors())
const multer = require('multer')
const path = require('path')
const UPLOAD_PATH = path.resolve(__dirname, 'path/to/uploadedFiles')
const upload = multer({
  dest: UPLOAD_PATH,
  limits: {fileSize: 1000000, files: 5}
})


failures.post('/fregister' ,upload.array('image',5)   , (req, res) => {
 
 const images = req.files.map((file) => {
  return {
    filename: file.filename,
    originalname: file.originalname
  }
})   
 
/*  const today = new Date() 
 const failureData = {
  customer_name: req.body.customer_name,
  failures_name: req.body.failures_name,
  failures_species: req.body.failures_species,
  brand_name: req.body.brand_name,
  note: req.body.note,
  price: req.body.price,
  created: today,
  failuresstate:req.body.failuresstate,
 
 }  */
/*

   Failures.findOne({
    failures_name: req.body.failures_name
  })
    .then(data => {
      if (!data) {
       
          Failures.create(failureData)
            .then(data => {
             res.json({ status: data.failures_name + 'Registered!' })
           res.json({ message: "false"}) */
         
           Failures.create(images, (err, result) => {
            if (err) return res.sendStatus(404)
            res.json(result)
          })
         /*    FailuresImage.insertMany(images, (err, result) => {
              if (err) return res.sendStatus(404)
              res.json(result)
          })  }) */
           /*  })
            .catch(err => {
              res.json({ message: "true"})
               
            })
       
      } else {
        res.json({ error: 'Failures already exists' })
      }
    }) 
     .catch(err => {
      res.send('error: ' + err)
    })    */
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
failures.put('/flist', (req, res) => {
  const customerData = {
    customer_name: req.body.customer_name,
    failures_name: req.body.failures_name,
    failures_species: req.body.failures_species,
    brand_name: req.body.brand_name,
    price: req.body.price,
    note: req.body.note,
    _id:req.body._id,
    failuresstate:req.body.failuresstate
  }
  Failures.update({_id:req.body._id},customerData,function(err,objs){ })
    .then(objs=> {
       
      res.json(objs)
    })
    .catch(err=>{
      res.json({ error: 'Failures already exists' })
    })
 

})
failures.post('/flist', (req, res) => {
  console.log(req.body._id)

  
  Failures.deleteOne({_id:req.body._id})
    .then(objs=> {
       
      res.json(objs)
    })
    .catch(err=>{
      res.json({ error: 'Failures already exists' })
    })
 

})

module.exports = failures
