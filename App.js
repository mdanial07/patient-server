var express = require('express')
var app = express()
var routes = require("./route/routes")
var bodyParser = require('body-parser')
var mongoose = require('mongoose')


mongoose.connect('mongodb://mdanial07:123456@ds163294.mlab.com:63294/patientapp',
// mongoose.connect('mongodb://localhost/patient',
    {
        useMongoClient: true
    })

app.use(bodyParser.json())

routes(app)

app.use((err, req, res, next) => {
    console.log(err.message)
    res.send(err.message)
    next()
})

module.exports = app