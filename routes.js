const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({ 'test': 123 })
})

router.get('/test', (req, res) => {
    res.send({ 'test': 1234 })
})

module.exports = router
