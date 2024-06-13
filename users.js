const express = require('express');
const router = express.Router();
const {User} = require('./Schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);

    } catch(error) {
        res.status(500).send(error);
    }
})

router.post('/login', async (req, res) => {
    try {

        const { email, password } = payload
        const user = await User.findOne({ email })

        if(!user) {
            throw new Error(`User not found`)
        }

        const correctMatch = await bcrypt.compare(password, user.password);
        if (!correctMatch) {
            throw new Error(`Incorrect password`)
        }

        const token = jwt.sign(
            { id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }
        )

        res.status(201).send(token);
        
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;