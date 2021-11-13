
const validator = require('validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
      type: String,
      trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }, 
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
          if (value.toLowerCase().includes('password')) {
            throw new Error('Password should not contain word: password');
          }
        },
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Email is Invalid');
          }
        },
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
          if (!validator.isMobilePhone(value)) {
            throw new Error('Phone is invalid');
          }
        },
    },
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports=User;
