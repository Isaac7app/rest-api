const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);




//Connect to Db
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB'))

app.listen(4000);