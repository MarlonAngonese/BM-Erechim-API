const express = require('express')
const router = require('./routes')
const cors = require('cors')
const db_connection = require('./database')

const app = express()

app.use(cors())
app.use(express.json())

/**
 * Start database
 */
db_connection()

/**
 * Configure default port
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`:: Listening to port ${port} ::`);
});

/**
 * Call API routes
 */
app.use('/api', router)