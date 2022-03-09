const mongoose= require ('mongoose');
const { router } = require('../app');
const Schema= mongoose.Schema;

const artworkSchema= new Schema ({
    // picture: Image,
    title: String,
    description: String,

});

const Artworks= mongoose.model('Artworks', artworkSchema );
module.exports= Artworks;

