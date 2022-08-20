const router = require('express').Router()
const mongoose = require('mongoose')

router.post('/test', (req, res) => {
    res.status(201).send({ 'mongoose': 'connected' });
})

router.get('/test', (req, res) => {
    let error = 'You cannot access this route in GET method!'
    res.status(500).send({ message: `Internal Server Error.\n\n${error}`})
})

module.exports = router
