const express = require('express');
const router = express.Router();
const {Review} = require('./Schema');

router.post('/reviews', async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(200).send(review);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).send(reviews);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.get('/reviews/:id', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if(!review) {
            res.status(404).send('Review not found')
        }
        res.status(200).send(review);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.put('/reviews/:id', async (req, res) => {
    try {
        const updateReview = await Review.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        )
        if(!updateReview) {
            res.status(404).send('Review not found')
        }
        res.status(200).send(updateReview);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.delete('/reviews/:id', async (req, res) => {
    try {
        const deleteReview = await Review.findByIdAndDelete(req.params.id);
        if(!deleteReview) {
            res.status(404).send('Review not found')
        }
        res.status(200).send(updateReview);
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;