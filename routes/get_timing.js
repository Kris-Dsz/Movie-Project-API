const router = require("express").Router();
let Movie = require('../models/movies.model');
let Timing = require('../models/timings.model');
const mongoose = require('mongoose');
router.post('',(req, res) => {
    const title=req.body.title;
    Movie.find({title})
        .then(data =>{
            //res.send(data[0]._id);
            const id = mongoose.Types.ObjectId(data[0]._id);
            Timing.find({movieId: id})
                .then(data => res.send(data))
                .catch(err => res.status(400).json('Error: '+err));
        }).catch(err => res.status(400).json('Error: '+err));
  });

  router.post('/byId',(req, res) => {
    const id=mongoose.Types.ObjectId(req.body.id);
    Timing.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(400).json('Error: '+err))
  });

module.exports = router;