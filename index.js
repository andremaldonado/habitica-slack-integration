var express = require('express');
var request = require('request');

var clientId = process.env.SLACK_CLIENTID;
var clientSecret = process.env.SLACK_CLIENTSECRET;

var app = express();
var bodyParser = require('body-parser');
const PORT=80;

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(PORT, function () {
    console.log("Example app listening on port " + PORT);
});

app.get('/', function(req, res) {
    res.send('Ngrok is working! Path Hit: ' + req.url);
});

app.get('/oauth', function(req, res) {
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
        console.log("Looks like we're not getting code.");
    } else {
        request({
            url: 'https://slack.com/api/oauth.access', //URL to hit
            qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, //Query string data
            method: 'GET', //Specify the method

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.json(body);

            }
        })
    }
});

app.post('/habitica', urlencodedParser, function(req, res) {
    if (typeof req.body !== undefined && req.body) {
        switch(req.body.text) {
            case "list":
                res.send('still working on listing your tasks :(');
                break; 
            default: 
                res.send('still working on new tasks creation :(');
        }
    }
});
