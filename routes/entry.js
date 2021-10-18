const express = require("express");
const router = express.Router();

const Entry = require('../models/Entry');

router.post('/', (req, res) => {
    const {
        userId,
        text,
    } = req.body;
    if (!userId || !text ) {
        return res.status(400).json({msg: "Please enter all fields"});
    }
    const newEntry = new Entry({
        userId,
        text,
    });
    newEntry.save().then((entry) => res.status(200).json({entry}));
});

router.post('/entrylist', (req, res) => {
    const {
        id,
    } = req.body;
    Entry.find({userId: id})
        .then(entries => {
            return res.status(200).json({
                entries
            });
        });
});

module.exports = router;