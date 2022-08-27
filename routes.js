const router = require('express').Router()

/**
 * Load Controllers
 */
const UsersController = require('./controller/UsersController')
router.use('/users', UsersController)


/**
 * Test routes
 */
router.post('/test', (req, res) => {
    res.status(201).json({ 'server': 'connected' })
})

module.exports = router
