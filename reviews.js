const express = require('express');
const router = express.Router();
const Review = require('./Schema');

router.post('/reviews', async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(200).send(review);
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;