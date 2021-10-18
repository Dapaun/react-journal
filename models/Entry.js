const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Entry Schema

const EntrySchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    post_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('entry', EntrySchema);
