var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../src/config/server");
var should = chai.should();
const CONFIG = require("../src/config/config");

chai.use(chaiHttp);

var nock = require("nock");

describe("/GET list", () => {

    describe("when task list is requested", () => {
        
        var habiticaresponse = nock(CONFIG.habitica.api_url)
            .get(CONFIG.habitica.get_tasks_url)
            .reply(200, 
                {"success":true,"data":[{"_id":"8888461b-f5eb-4a16-97d3-c03380c422a3","userId":"b0413351-405f-416f-8787-947ec1c85199","text":"15 minute break","type":"reward","notes":"","tags":[],"value":10,"priority":1,"attribute":"str","challenge":{},"group":{"assignedUsers":[],"approval":{"required":false,"approved":false,"requested":false}},"reminders":[],"createdAt":"2017-01-07T17:52:09.121Z","updatedAt":"2017-01-11T14:25:32.504Z","id":"8a9d461b-f5eb-4a16-97d3-c03380c422a3"},,{"_id":"84c2e874-a8c9-4673-bd31-d97a1a42e9a3","userId":"b0413351-405f-416f-8787-947ec1c85199","alias":"prac31","text":"Practice Task 31","type":"daily","notes":"","tags":[],"value":1,"priority":1,"attribute":"str","challenge":{},"group":{"assignedUsers":[],"approval":{"required":false,"approved":false,"requested":false}},"reminders":[{"time":"2017-01-13T16:21:00.074Z","startDate":"2017-01-13T16:20:00.074Z","id":"b8b549c4-8d56-4e49-9b38-b4dcde9763b9"}],"createdAt":"2017-01-13T16:34:06.632Z","updatedAt":"2017-01-13T16:49:35.762Z","checklist":[],"collapseChecklist":false,"completed":true,"history":[],"streak":1,"repeat":{"su":false,"s":false,"f":true,"th":true,"w":true,"t":true,"m":true},"startDate":"2017-01-13T00:00:00.000Z","everyX":1,"frequency":"weekly","id":"84c2e874-a8c9-4673-bd31-d97a1a42e9a3"}],"notifications":[]}
            );

        it("it should return a list of user\'s tasks if everything is ok", (done) => {
            chai.request(server)
            .post("/habitica")
            .type("urlencoded")
            .send({text: "list"})
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.should.have.property("text");
                res.text.should.have.length.within(10, 100);
                done();
            });
        });
       
        habiticaresponse = nock(CONFIG.habitica.api_url)
            .get(CONFIG.habitica.get_tasks_url)
            .reply(401, "is no account that uses those credentials.");

        it("it should return an error when wrong credentials are used", (done) => {
            chai.request(server)
            .post("/habitica")
            .type("urlencoded")
            .send({text: "list"})
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.should.have.property("text").to.match(/"success":false/);;
                done();
            });
        });
    });
}); 
