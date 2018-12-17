const env = process.env.NODE_ENV

const dev = {
    app: {
        port: parseInt(process.env.HTTP_PORT) || 3394
    },
    habitica: {
        api_url: process.env.HABITICA_API_URL || 'https://habitica.com/api/v3',
        get_tasks_url: process.env.HABITICA_GET_TASKS_URL || '/tasks/user?type=todos'
    }
}

const test = {
    app: {
        port: parseInt(process.env.HTTP_PORT) || 3394
    },
    habitica: {
        api_url: process.env.HABITICA_API_URL || 'https://habitica.com/api/v3',
        get_tasks_url: process.env.HABITICA_GET_TASKS_URL || '/tasks/user?type=todos'
    }
}

const config = {
    dev,
    test
}

module.exports = config[env]
