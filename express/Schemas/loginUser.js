const mongoose = require('mongoose');

const loginUsers = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const LoginUsers = mongoose.model("loginUsers",loginUsers)
module.exports = LoginUsers;


