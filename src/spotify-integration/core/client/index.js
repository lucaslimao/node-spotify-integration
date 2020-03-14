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

const get = headers => async (uri) => await axios.get(`${url}${uri}`, headers)

const post = headers => async (uri, data) => await axios.post(`${url}${uri}`, data, headers)

module.exports = (token) => {

    const headers = buildHeader(token)

    return {
        get: get(headers),
        post: post(headers)
    }

}