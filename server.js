const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require("config");
const auth = require('./routes/auth');
const signUp = require('./routes/signUp');
const entry = require('./routes/entry');

const app = express();

// Mw for parsing json data
app.use(express.json());

//DB setup
const db = config.get('mongoURI');
mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the DB');
    })
    .catch(e => console.log(e));

app.use('/auth', auth);
app.use('/signUp', signUp);
app.use('/entry', entry);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));