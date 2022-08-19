const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({ 'test': 123 })
})

module.exports = router