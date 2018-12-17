const CONFIG = require('../config/config')
const clientId = process.env.SLACK_CLIENTID
const clientSecret = process.env.SLACK_CLIENTSECRET

const express = require('express')
const request = require('request')

const habitica = require('../app/habitica')

const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser)

app.listen(CONFIG.app.port, function () {
    console.log('habiticaslack listening on port ' + CONFIG.app.port)
})

app.route('/habitica').post(habitica.post)

app.use((err, request, response, next) => {
  console.log(err)
  response.status(500).send('Something broke!')
})

module.exports = app
