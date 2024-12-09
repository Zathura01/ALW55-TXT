const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUri = 'mongodb://localhost:27017/alw55-txt'
mongoose.connect(mongoUri).then(()=>console.log("MongoDB Connected"))

const webTokenVerification = (req,res,next)=>{
    const token = req.header('Authorization')

    if(!token){
        return res.status(403).json({message:"You are not authorized",ok:false})
    }
    jwt.verify(token, "publicKey", (err, user)=>{
        if(err){
            return res.status(403).json({message:"Invalid token",ok:false})
        }

        req.user = user; // this will add user info in the further req 
        next();
    })  

}
 
app.get("/", (req, res) => {	});
app.use("/loginUser",require('./Files/loginUser'));
app.use("/registerUser",require('./Files/registerUser'));


app.listen(PORT, () => console.log("Server running on port " + PORT));