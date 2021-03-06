const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// Bringing Models
const User = require("../../models/User");

//Routes
//POST Request api/users
//Register new Users
//access Public 
router.post("/", (req,res) =>{
    const {username, email, password} = req.body;

    //Validation
    if(!username || !email || !password) {
        return res.status(400).json({msg: "Please enter all fields."});
    }


    //Check for existing user
    User.findOne({email})
    .then(user => {
        if(user) {
            return res.status(400).json({msg: "User already exists"});
        } else{
        const newUser = new User({username,email,password});
        //Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {bcrypt.hash(password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user =>{

                jwt.sign(
                    {id: user.id },
                    config.get("jwtSecret"),
                    {expiresIn: 3600}, //This token will expire in an hour
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                username: user.username,
                                email: user.email
                            }
                        });
                    }
                )

                
            });
        })})
    }
    })
});

module.exports = router;