const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    genre: {type: String, required: true},
});

const reviewSchema = new mongoose.Schema({
    movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    rating: {type: Number, required: true},
    comment: {type: String},
    createdAt: {type: Date, default: Date.now}
});

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
});

const Movie = mongoose.model('Movie', movieSchema);
const Review = mongoose.model('Review', reviewSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Movie, Review, User
}