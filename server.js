const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());
const register=require('./routes/register');
const signin=require('./routes/signin');
// remove this in final 
const movie=require('./routes/movie');
const get_movie=require('./routes/get_movie');
const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
    });

//Promise thing--- to add then remove below connecton code
//     .then(() => {
//         console.log("Connected to the database!");
//       })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
// });

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection successful");
})

const usersRouter = require('./routes/users');
app.use("/users",usersRouter);

app.use("/register",register);
app.use("/signin",signin);
app.use("/movie",movie);
app.use("/get_movie",get_movie);
app.listen(3000,()=>{
    console.log(`server is running...`);
})