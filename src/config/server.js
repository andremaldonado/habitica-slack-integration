const PORT = 3394;
var clientId = process.env.SLACK_CLIENTID;
var clientSecret = process.env.SLACK_CLIENTSECRET;

var express = require("express");
var request = require("request");

var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(PORT, function () {
    console.log("habiticaslack listening on port " + PORT);
});

app.get("/oauth", function(req, res) {
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
        console.log("Looks like we're not getting code.");
    } else {
        request({
            url: "https://slack.com/api/oauth.access",
            qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
            method: "GET",

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.json(body);

            }
        });
    }
});

app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send("Something broke!");
});

exports.app = app;
exports.urlencodedParser = urlencodedParser;
