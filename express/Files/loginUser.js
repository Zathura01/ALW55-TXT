const express = require('express')
const router = express.Router()
const RegisteredUser = require('./../Schemas/registeredUsers');
const LoginUsers = require('../Schemas/loginUser');
const jwt = require('jsonwebtoken');
const bwt = require('bcryptjs')



router.post('/', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await RegisteredUser.findOne({ username })
    if (!existingUser) {
        return res.status(200).json({ ok: true, message: "Register first" })
    }

    const compare = await bwt.compare(password, existingUser.password)
    const bwtPassword = await bwt.hash(password, 10)
    if (compare) {
        const loginEntry = await LoginUsers({
            username,
            password:bwtPassword
        })
        const entryDone = await loginEntry.save();
        if (entryDone) {
            const token = jwt.sign({ userId: existingUser._id }, "publicKey");

            return res.status(200).json({
                message: "Login entry made",
                ok: true,
                token
            })

        }
        else {
            return res.status(403).json({ message: "Something went wrong in loging the user", ok: false })
        }
    }
    else {
        return res.status(200).json({ message: "Credentials given are incorrect", ok: false })
    }

})

module.exports = router;