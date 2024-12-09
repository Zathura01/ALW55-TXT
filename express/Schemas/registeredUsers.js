const mongoose = require('mongoose');

const registerUserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Full name is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    checkbox: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const RegisteredUser = mongoose.model("RegisteredUser", registerUserSchema);

module.exports = RegisteredUser;
