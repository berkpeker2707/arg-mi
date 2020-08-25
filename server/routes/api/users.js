const express = require("express");
const router = express.Router();

// Bringing Models
const User = require("../../models/User");

//Routes
//GET Request api/users
//GET All Users
//access Public 
router.get("/user", (req,res) =>{
    User.find()
        .sort({date: -1})
        .then(user => res.json(user));
});

//POST Request api/users
//Create A Users
//access Public 
router.post("/user", (req,res) =>{
    const newUser = new User({
        username: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    newUser.save()
    .then(user => res.json(user));
});

//DELETE Request api/users:id
//DELETE A Users
//access Public 
router.delete("/user:id", (req,res) =>{
    User.findById(req.params.id).then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;