const CONFIG = require("../config/config");
var clientId = process.env.SLACK_CLIENTID;
var clientSecret = process.env.SLACK_CLIENTSECRET;

var express = require("express");
var request = require("request");

var habitica = require("../app/habitica");

var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);

app.listen(CONFIG.app.port, function () {
    console.log("habiticaslack listening on port " + CONFIG.app.port);
});

app.route("/habitica").post(habitica.post);

app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send("Something broke!");
});

module.exports = app;
