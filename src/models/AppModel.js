const {Schema, model} = require('mongoose');

const app = new Schema({
    id: Number,
    creator: String,
    name: String,
    genre: String,
    thumbnail: String,
    img: String,
    description: String,
    url: String
});

module.exports = model('app', app);