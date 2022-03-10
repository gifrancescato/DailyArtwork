const mongoose= require ('mongoose');
const { router } = require('../app');
const Schema= mongoose.Schema;

const artworkSchema= new Schema ({
    // picture: Image,
    image: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Artworks= mongoose.model('Artworks', artworkSchema );
module.exports= Artworks;


