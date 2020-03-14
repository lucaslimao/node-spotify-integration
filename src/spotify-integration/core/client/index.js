const axios = require('axios')
const config = require('config')

const url = config.get('api.url')

let __token = '.'

const tokenStorage = token => {
    __token = token
}

const headers = () => {
    return {
        headers: {
            'Authorization': `Bearer ${__token}`
        }
    }

}

const get = async (uri) => await axios.get(`${url}${uri}`, headers())

const post = async (uri, data) => await axios.post(`${url}${uri}`, data, headers())

module.exports = () => {    

    return {
        get: get,
        post: post,
        token: tokenStorage
    }

}