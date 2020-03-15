const { albums, artists, tracks } = require('./spotify-integration/index')
const { isValid } = require('./spotify-integration/core/utils/index')

let __client_id = ''
let __client_secret = ''

module.exports = (client_id, client_secret) => {

    isValid(client_id)
    isValid(client_secret)

    __client_id = client_id
    __client_secret = client_secret

    return {
        artists: artists(__client_id, __client_secret),
        tracks: tracks(__client_id, __client_secret),
        albums: albums(__client_id, __client_secret)
    }

}