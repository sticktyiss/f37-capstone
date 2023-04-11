require('dotenv').config()
const {SERVER_PORT} = process.env
const express = require('express')
const cors = require('cors')
const app = express()

const { getPaintings, getJewelry, getResin } = require('./controller')

app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/public`))

//GET SPECIFIC PIECES
app.get('/paintings', getPaintings)
app.get('/resin', getResin)
app.get('/jewelry', getJewelry)
//Cart requests
// app.put('/cart')

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))