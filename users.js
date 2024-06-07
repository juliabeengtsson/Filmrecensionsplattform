const express = require('express');
const router = express.Router();
const User = require('./Schema');
//const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        //const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password,
            role
        })

        await newUser.save();
        res.status(201).send(newUser);
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;