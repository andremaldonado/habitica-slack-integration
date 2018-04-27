var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../src/app/index");
var should = chai.should();

chai.use(chaiHttp);

describe("/GET list", () => {
    it("it should return a list of user\'s tasks", (done) => {
        chai.request(server)
        .post("/habitica")
        .type("urlencoded")
        .send({text: "list"})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("success").eql("true");
            done();
        });
    });
}); 
