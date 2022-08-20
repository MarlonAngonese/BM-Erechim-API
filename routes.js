const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({ 'test': 123 })
})

router.get('/test', (req, res) => {
    res.send({ 'test': 1234 })
})

router.get('/hello', (req, res) => {
    res.send({ 'hello': 'hello world' })
})

module.exports = router
