const axios = require('axios')
const config = require('config')

const url = config.get('api.url')

const buildHeader = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

const get = headers => (uri) => {
    return uri
}

const post = headers => (uri, data) => {
    return uri
}

module.exports = (token) => {

    const headers = buildHeader(token)

    return {
        get: () => {
            get(headers)
        },
        post: post(headers)
    }

}