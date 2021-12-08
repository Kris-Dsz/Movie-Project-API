const router = require("express").Router();
let Transaction = require('../models/transaction.model');
const mongoose = require('mongoose');

// Create New Transaction
router.post('/create',(req, res) => {
    const newTransaction = new Transaction(req.body);
    //res.send(newTransaction);
    newTransaction.save()
        .then(data =>{res.send(data);})
        .catch(err => res.status(400).json('Error: '+err));
});

// Find Transactions by Username
router.post('/user',(req, res) => {
    const username=req.body.username;
    Transaction.find({username: username}).sort({purchasedate: "desc"})
        .then(data => res.send(data))
        .catch(err => res.status(400).json('Error: '+err))
});

//Find Trnasaction by Id
router.post('/id',(req, res) => {
    const id=mongoose.Types.ObjectId(req.body.id);
    Transaction.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(400).json('Error: '+err))
});

//Updating Transaction by ID based on Food Sent
router.post('/food',(req, res) => {
  const id=mongoose.Types.ObjectId(req.body.id);
  Transaction.findByIdAndUpdate(id,{food: req.body.food, $inc: { cost: req.body.cost }},{new: true})
      .then(data => res.send(data))
      .catch(err => res.status(400).json('Error: '+err))
});
module.exports = router;