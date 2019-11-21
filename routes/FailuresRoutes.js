const express = require('express')
const failures = express.Router()
const cors = require('cors')
const Failures = require('../models/FailuresModel')
failures.use(cors())
let multer = require('multer');
 let uuidv4 = require('uuid/v4');
 const DIR = './src/uploads';

 const storage = multer.diskStorage({
     destination: (req, file, cb) => {
         cb(null, DIR);
     },
     filename: (req, file, cb) => {
         const fileName = file.originalname.toLowerCase().split(' ').join('-');
         cb(null, uuidv4() + '-' + fileName)
     }
 });
 
 var upload = multer({
     storage: storage,
     fileFilter: (req, file, cb) => {
         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
             cb(null, true);
         } else {
             cb(null, false);
             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
         }
     }
 });
failures.put('/fregister', upload.single('profileImg','failures_name'), (req, res, next) => {
console.log(req.body.failures_name)

  const customerData = {
    failures_name:req.body.failures_name,
    profileImg: req.file.filename
   
  }
  Failures.update({failures_name:req.body.failures_name},customerData,function(err,objs){ })
  .then(objs=> {
     
    res.json(objs)
  })
  .catch(err=>{
    res.json({ error: 'Customer already exists' })
  })

})
failures.post('/fregister',(req, res )=> {
  
  const today = new Date() 
 const failureData = {
  customer_name: req.body.customer_name,
  failures_name: req.body.failures_name,
  failures_species: req.body.failures_species,
  brand_name: req.body.brand_name,
  note: req.body.note,
  price: req.body.price,
  created: today,
  failuresstate:req.body.failuresstate,
  profileImg:''
  }  
a=req.body.failures_name;
Failures.create(failureData)
    .then(data => {
      if (!data) {
       
         
       
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
failures.put('/flist', upload.single('profileImg','customer_name','failures_name','brand_name','price','note','failuresstate'), (req, res, next) => {
  
    const customerData = {
      profileImg: req.file.filename,
      customer_name:req.body.customer_name,
      brand_name:req.body.brand_name,
      price:req.body.price,
      failuresstate:req.body.failuresstate,
      note:req.body.note
    }
    Failures.update({failures_name:req.body.failures_name},customerData,function(err,objs){ })
    .then(objs=> {
       
      res.json(objs)
    })
    .catch(err=>{
      res.json({ error: 'Customer already exists' })
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
