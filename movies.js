const express = require('express');
const router = express.Router();
const Movie = require('./Schema');

router.post('/movies', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie)
    } catch(error) {
        res.status(500).send(error);
    }
});

router.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find();
        res.status(200).send(allMovies);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.get('/movies/:id', async (req, res) => {
    try {
        const movieById = await Movie.findById(req.params.id);
        if(!movieById) {
            res.status(404).send('Movie not found')
        }
        res.status(200).send(movieById);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.put('/movies/:id', async (req, res) => {
    try {
        const updateMovie = await Movie.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        )
        if(!updateMovie) {
            res.status(404).send('movie not found')
        }
        res.status(200).send(movieById);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.get('/movies/:id/reviews', async (req, res) => {
    try {
        
    } catch(error) {
        res.status(500).send(error);
    }
})

router.delete('/movies/:id', async (req, res) => {
    try {
        const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
        if(!deleteMovie) {
            res.status(404).send('Movie not found')
        }
        res.status(200).send(deleteMovie);
    } catch(error) {
        res.status(500).send(error);
    }
})


module.exports = router;