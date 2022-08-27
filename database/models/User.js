const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

/**
 * 
 * @param { Object } user User entity data
 * 
 * @returns User validation status message
 */
const userValidate = (user) => {
    if (!user.email) {
        return { error: 'Preencha um e-mail' }
    }
    if (!user.password) {
        return { error: 'Preencha uma senha' }
    }

    return { validated: true }
}

module.exports = { User, userValidate }