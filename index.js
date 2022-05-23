const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Rate Limit

const limiter = rateLimit({
    window: 10 * 60 * 1000, // 10 MIN
    max: 100
})
app.use(limiter)
app.set('trust proxy', 1)

// set static folder

app.use(express.static('public'))

// Routes

app.use('/api', require('./routes'))

// Enable cors 

app.use(cors())


app.listen(PORT, () => console.log(`listening on port ${PORT}`))