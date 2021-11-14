const router = require("express").Router();
let User = require('../models/users.model');
const bcrypt = require('bcryptjs');

router.post('', async (req, res) => {
   
    const username =req.body.username;
    const password = req.body.password;
    User.find({username},{_id:0})
        .then(data => {
          const isMatch =  bcrypt.compareSync(password, data[0].password);
          if(isMatch){
            res.json(data[0]);
          }
          else
            res.status(400).json('Invalid Username/Password');
        }).catch(err => res.status(400).json('Error: '+err));
  });
module.exports = router;