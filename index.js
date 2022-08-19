const express = require('express')
const router = require('./routes')

const app = express()

/**
 * Configure default port
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(":: Listening to port " + port + " ::");
});

/**
 * Call API routes
 */
app.use('/api', router)

/**
 * This commit is a pipeline test
 */
