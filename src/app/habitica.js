var request = require("request");
var bodyParser = require("body-parser");

const HABITICA_API = "https://habitica.com/api/v3"; //TODO: remove this url from here
const GET_TASKS = "/tasks/user?type=todos"; //TODO: remove this url from here

function post(req, res) {
    if (typeof req.body !== "undefined" && req.body) {
        switch(req.body.text) {
            case "list":
                request({
                    url: HABITICA_API + GET_TASKS,
                    headers: { "x-api-user": process.env.HABITICA_USERID, "x-api-key": process.env.HABITICA_APITOKEN }
                }, function (apiError, apiResponse, apiBody) {
                    if (apiResponse.statusCode == 200) {
                        var data = JSON.parse(apiBody);
                        var tasklist = "Here is your list of tasks: \n";
                        for (task of data.data) {
                            if (task) 
                                tasklist += " - " + task.text + "\n";
                        }
                        res.send(tasklist);
                    } else {
                        res.send("{\"success\":false, response:\"", apiResponse, "\"");
                    }
                });    
                break; 
            default: 
                res.send("{\"success\": \"false\",\"message\": \"Still working on tasks creation\"}");
        }
    }
}

module.exports.post=post;
