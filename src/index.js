const { artists, core, tracks } = require('./spotify-integration/index')

let __token = ''
let __client_id = ''
let __client_secret = ''

module.exports = (token, client_id, client_secret) => {

    __token = token
    __client_id = client_id
    __client_secret = client_secret

    return {
        artists: artists(__token, __client_id, __client_secret),
        tracks: tracks(__token, __client_id, __client_secret)
    }

}