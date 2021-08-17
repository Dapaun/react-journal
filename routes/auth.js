const e = require("express");
const express = require("express");
const router = express.Router();

const User = require('../models/User');

// @route Post
// @desc Auth user
// @access Public
router.post('/', (req, res) => {
    const {
        email,
        password
     } = req.body;
    
    // some validation
    console.log(
        req.body
    );
    if (!email || !password ) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    // check if the user exists
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg: "User not found"});
            if(user.password === password) {
                return res.status(200).json({
                    user: {
                        id: user.id,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        email: user.email,
                        registerDate: user.register_date
                    }
                });
            } else {
                return res.status(400).json({msg: 'Invalid Credentials'});
            }
        })
});

module.exports = router;