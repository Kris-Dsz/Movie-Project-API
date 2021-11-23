const router = require("express").Router();
let Food = require('../models/food.model');
const mongoose = require('mongoose');

router.post('/create',(req, res) => {
    const newFood = new Food(req.body);
    newFood.save()
        .then(data =>{res.send(data);})
        .catch(err => res.status(400).json('Error: '+err));
  });

  router.post('/get',(req, res) => {
    Food.find()
        .then(data => res.send(data))
        .catch(err => res.status(400).json('Error: '+err))
  });

//   router.post('/id',(req, res) => {
//     const id=mongoose.Types.ObjectId(req.body.id);
//     Transaction.findById(id)
//         .then(data => res.send(data))
//         .catch(err => res.status(400).json('Error: '+err))
//   });
module.exports = router;