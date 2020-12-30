const express = require('express')
const mongoose = require( 'mongoose' )
const apiRouter = require('./app/router')
const app = express()

const {PORT, MONGODB_URI} = process.env

mongoose.connect(MONGODB_URI || "mongodb://localhost/portfolio" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

app.use(express.static('client/build'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

apiRouter(app)

app.get('/*', (req, res) => {
    const path = `${__dirname}/client/build/index.html`
    const file = `${req.protocol}//${req.get('host')}/${req.originalUrl}`
    console.log(`[/*] (${file} -- sending file: ${path}`)
    res.sendFile(path)
})

app.listen(PORT || 8080, 
    console.log(`Serving app at: http://localhost:${PORT || 8080}`))
