const mongoose= require ('mongoose');
const { router } = require('../app');
const Schema= mongoose.Schema;

const artworkSchema= new Schema ({
    // picture: Image,
    image: String,
    description: String,
    // tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

const Artworks= mongoose.model('Artworks', artworkSchema );
module.exports= Artworks;

