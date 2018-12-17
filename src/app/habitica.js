const request = require('request')
const bodyParser = require('body-parser')

const CONFIG = require ('../config/config')

function post(req, res) {
    if (typeof req.body !== 'undefined' && req.body) {
        //TODO: check if we have userid in our database
        switch(req.body.text) {
            case 'list':
                listTasks(req.body.user_id, (task_list) => res.send(task_list))   
                break 
            default: 
                res.send('{\'success\': \'false\',\'message\': \'Still working on tasks creation\'}')
        }
    }
}

//TODO: refactor to promise
function listTasks(user_id, callback) {
    request({
        url: CONFIG.habitica.api_url + CONFIG.habitica.get_tasks_url,
        headers: { 'x-api-user': process.env.HABITICA_USERID, 'x-api-key': process.env.HABITICA_APITOKEN }
    }, function (apiError, apiResponse, apiBody) {
        if (apiResponse.statusCode == 200) {
            let data = JSON.parse(apiBody)
            let task_list = 'Here is your list of tasks: \n'
            for (task of data.data) {
                if (task) 
                    task_list += ' - ' + task.text + '\n'
            }
            callback(task_list)
        } else {
            callback('{\'success\':false, response:\'', apiResponse, '\'')
        }
    })    
}

module.exports.post=post
