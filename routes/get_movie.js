const router = require("express").Router();
let Movie = require('../models/movies.model');

router.post('',(req, res) => {
    Movie.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: '+err));
  });

module.exports = router;