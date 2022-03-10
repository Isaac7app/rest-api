const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    text: String,
    day: String,
    reminder: Boolean,
    id: Number
});

module.exports = mongoose.model('Posts', PostSchema);