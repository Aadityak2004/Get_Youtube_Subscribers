const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

//configuring env
dotenv.config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connecting to DATABASE using ENV
// const DATABASE_URL = process.env.MONGOURI;
mongoose.connect("mongodb+srv://adityakathoke15:AadityaK2004@cluster0.rt2aq1g.mongodb.net/?retryWrites=true&w=majorityL", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// To start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));