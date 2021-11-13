const router = require("express").Router();
let Movie = require('../models/movies.model');

router.post('',(req, res) => {
    const newMovie = new Movie(req.body);
    newMovie.save()
        .then(() => res.json(newMovie))
        .catch(err => res.status(400).json('Error: '+err));
  });


module.exports = router;