const router = require("express").Router();
const Artworks = require("../models/Artworks");
const artworkSchema = require('../models/Artworks');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

//get all the artworks
router.get('/', (req, res, next) => {
  Artworks.find()
  .then(artworks => {
    res.status(200).json(artworks)
  })
})

//create an artwokr
router.post('/', (req, res, next) =>{
  const { title, description } = req.body
  Artworks.create({ title, description })
  .then(project => {
      res.status(201).json(project)
  })
  .catch(err => next(err))
})

// get a specific artwork
router.get('/id:', (req, res, next) => {
  Artworks.findById(req.params.id)
  .then(project => {
    //check for a valid mongodbject id 

    if (!artworks) {
      res.status(404).json(artworks)
    } else {
      res.staturs(200).json(artworks)
    }

  })
})

//update an artwork
router.put('/:id', (req, res, next) => {
  const {title, description}= req.body
  Artworks.findByIdAndUpdate(req.params.id, {
    title,
    description
  }, {new: true})
  .then(updatedArtwork => {
    res.status(200).json(updatedArtwork)
  })
  .catch(err => next(err))
})

//delete
router.delete('/:id', (req, res, next) => {
  Artworks.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(200).json({message:'artwork deleted'})
  })
  .catch(err => (err))
})

module.exports = router;
