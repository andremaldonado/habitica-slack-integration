var request = require("request");
var bodyParser = require("body-parser");
const CONFIG = require ("../config/config");

function post(req, res) {
    if (typeof req.body !== "undefined" && req.body) {
        switch(req.body.text) {
            case "list":
                request({
                    url: CONFIG.habitica.api_url + CONFIG.habitica.get_tasks_url,
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
