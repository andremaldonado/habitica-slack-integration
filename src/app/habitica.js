var request = require("request");
var bodyParser = require("body-parser");

const CONFIG = require ("../config/config");

function post(req, res) {
    if (typeof req.body !== "undefined" && req.body) {
        //TODO: check if we have userid in our database
        switch(req.body.text) {
            case "list":
                listTasks(req.body.user_id, (taskList) => res.send(taskList));   
                break; 
            default: 
                res.send("{\"success\": \"false\",\"message\": \"Still working on tasks creation\"}");
        }
    }
}

function listTasks(user_id, callback) {
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
            callback(tasklist);
        } else {
            callback("{\"success\":false, response:\"", apiResponse, "\"");
        }
    });    
}

module.exports.post=post;
