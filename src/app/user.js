const _ = require('lodash')
const redis = require('redis');

function getUserToken(slack_user_id) {
    return new Promise((resolve, reject) => {
        if (_.isNil(slack_user_id)) {
            reject('Slack user ID not provided')
        } else {
            const redisClient = redis.createClient()
            redisClient.get(slack_user_id, (error, reply) => {
                if (_.isNil(reply)) {
                    resolve(null)
                } else {
                    const userData = JSON.parse(reply)
                    resolve(userData.habitica_token)
                }
            })
        }
    })
}

module.exports.getUserToken=getUserToken
