const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const Post = require('../models/Post')

app.use(express.json());

router.get('/', (req, res) => {
    res.send('Post Homapge')
});

router.post('/', (req,res) => {
  console.log(req.body)
})

module.exports = router;