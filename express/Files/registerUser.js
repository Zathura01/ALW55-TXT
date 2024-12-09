const express = require('express');
const RegisteredUser = require('../Schemas/registeredUsers');
const router = express.Router(); 
const bwt = require('bcryptjs')


router.post('/', async (req, res) => {
    const { fullname, username, email, password, checkbox } = req.body;
 
    const checking = await RegisteredUser.findOne({username});
    if(checking){
        res.status(200).json({ok:true, message: "User already in DB"});
    }
     
    const bwtPassword = await bwt.hash(password,10)

    const newUser = new RegisteredUser({
        fullname,
        username,
        email,
        password:bwtPassword, 
        checkbox
    });
    await newUser.save();
    console.log(req.body);
    
    res.status(200).json({ ok:true, message: 'User registered successfully' });
});

module.exports = router; 
