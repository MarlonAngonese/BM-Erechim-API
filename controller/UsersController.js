const router = require('express').Router()
const { User, userValidate } = require('../database/models/User')
const bcrypt = require('bcrypt')

/**
 * Insert a new user into the database
 */
router.post('/', async (req, res) => {
    let { name, email, password } = req.body

    var newUser = {
        name,
        email,
        password
    }

    // Call validation method
    const validateResponse = userValidate(newUser)

    if (validateResponse.error) {
        return res.status(500).json({ error: validateResponse.error })
    }

    try {
        // Encrypt password using bcrypt
        generatedSalt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(newUser.password, generatedSalt)

        // Create new User
        await User.create(newUser)

        return res.status(201).json({ user: newUser })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})

/**
 * Get all Users list
 */
router.get('/', async (req, res) => {
    try {
        // Calcule actual pagination
        const page = parseInt(req.query.page)
        const limit = 50
        let skipCalc = 0
    
        if (page) skipCalc = limit * (page - 1)
    
        // Search user with pagination and order by email asc
        const users = await User.find(
            {},
            'name email',
            {
                limit: limit,
                skip: skipCalc,
                sort: { email: 1 } // 1 -> ASC, -1 -> DESC
            }
        ).exec()
    
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})

module.exports = router