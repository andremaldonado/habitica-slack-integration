const chai = require('chai')
const chai_as_promised = require('chai-as-promised')
const should = chai.should()
const expect = chai.expect
const redis = require('redis')
const redis_mock = require('redis-mock')
const sinon = require('sinon')

const user = require('../src/app/user')

chai.use(chai_as_promised)

describe('User', () => {
    describe('when a user is required', () => {

        before(() => {
            const redis_stub = sinon.stub(redis, 'createClient')
            const redis_fake_instance = redis_mock.createClient()
            
            redis_fake_instance.set('existent-user',"{\"habitica_token\": \"test_token\"}", () => { 
                redis_stub.returns(redis_fake_instance)
            })
        })

        it('it should return null if a user is not found', () => {
            return user.getUserToken('non-existent-user').should.be.empty
        })

        it('it should be rejected if no information were provided', () => {
            return user.getUserToken().should.be.rejected
        })

        it('it should return user data when an user is found', () => {
            return user.getUserToken('existent-user').should.eventually.equal('test_token')
        })
    })
})
