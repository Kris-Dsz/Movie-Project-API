const router = require("express").Router();
let Movie = require('../models/movies.model');
let Timing = require('../models/timings.model')
router.post('',(req, res) => {
    const newTiming = new Timing(req.body);
    newTiming.save()
        .then( data => res.json(data)
            // Movie.findById(newTiming.movieId)
            //     .then(data=>res.send(data))
            //     .catch(err => res.status(400).json('Error: '+err))
        )
        .catch(err => res.status(400).json('Error: '+err))
  
  });


module.exports = router;