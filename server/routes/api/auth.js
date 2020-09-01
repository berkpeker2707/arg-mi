const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// Bringing Models
const User = require("../../models/User");

//Routes
//POST Request api/auth
//Register Authenticate User
//access Public 
router.post("/", (req,res) =>{
    const {email, password} = req.body;

    //Validation
    if(!email || !password) {
        return res.status(400).json({msg: "Please enter all fields."});
    }

    //Check for existing user
    User.findOne({email})
    .then(user => {
        if(!user) {
            return res.status(400).json({msg: "Please enter correctly."});
        } else{
            //Validate Password
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({msg:"Invalid entry"});

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
            })
        
    }
    })
});

//GET Request api/auth/user
//GET Get user data
//access Private 
router.get("/user", auth, (req,res) =>{
    User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
})

module.exports = router;