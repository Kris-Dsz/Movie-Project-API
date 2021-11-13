const router = require("express").Router();
let User = require('../models/users.model');
const bcrypt = require('bcryptjs');

router.post('',(req, res) => {
    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(newUser.password,8);
    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json('Error: '+err));
  });


module.exports = router;