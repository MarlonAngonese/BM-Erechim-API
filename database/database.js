const mongoose = require('mongoose')
require('dotenv').config({ path: __dirname + '/../.env' })

module.exports = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusterapi.sn3odjh.mongodb.net/defaultdb?retryWrites=true&w=majority`)
    .then(() => {
        console.log(`:: MongoDB connected ::`)
    }).catch((err) => {
        throw `Wrong database credentials\n ${err}`
    })
}
