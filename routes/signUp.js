const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route Post
// @desc Users
// @acces Public

router.post('/', (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    if (!email || !password || !firstName || !lastName ) {
        return res.status(400).json({msg: "Please enter all fields"});
    }
    console.log('FirstName ', firstName);
    console.log('LastName ', lastName);
    User.findOne({email})
        .then((user) => {
           if(user) return res.status(400).json({msg: "This email is already beeing used"});
           const newUser = new User({
               email,
               password,
               first_name: firstName,
               last_name: lastName,
           });
           newUser.save().then((user) => res.status(200).json({user}));
        });
});

module.exports = router;