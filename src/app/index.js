var server = require('../config/server');

server.app.post('/habitica', server.urlencodedParser, function(req, res) {
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
