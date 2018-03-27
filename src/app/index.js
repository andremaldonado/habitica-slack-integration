var server = require("../config/server");
var request = require("request");
var bodyParser = require("body-parser");

const GET_TASKS = "https://habitica.com/api/v3/tasks/user";

server.app.post('/habitica', server.urlencodedParser, function(req, res) {
    if (typeof req.body !== null && req.body) {
        switch(req.body.text) {
            case "list":
                request({
                    url: GET_TASKS,
                    headers: { "x-api-user": process.env.HABITICA_USERID, "x-api-key": process.env.HABITICA_APITOKEN }
                }, function (apiError, apiResponse, apiBody) {
                    if (apiError) {
                        res.send(apiError);
                    } else {
                        res.send(apiBody);
                    }
                });
                break; 
            default: 
                res.send("still working on new tasks creation :(");
        }
    }
});
