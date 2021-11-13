const router = require("express").Router();
let User = require('../models/users.model');

router.route('/').get((req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
    const username =req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;
    
    const newUser = new User({username,password,email,phone});
    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) =>{
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: '+err));
})

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username =req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.phone = req.body.phone;

            user.save()
            .then(() => res.json('User Updated!'))
            .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
})


module.exports = router;

// const router = require('express').Router();
// let User = require('../models/users.model');

// //if we get GET request sent the data
// router.route('/').get((req,res)=>{
//     //find the user list and sent to client
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

// //if we get POST request recieve the data
// router.route('/add').post((req,res)=>{
//     //taking the new user name form client
//     const username = req.body.username;
//     //adding the user to database
//     const newUser = new User({username});
//     //saving the database with new user
//     newUser.save()
//         .then(()=> {
//                res.json({msg : 'user added!'})
//         })
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

// module.exports = router;