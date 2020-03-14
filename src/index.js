const { artists, core, tracks } = require('./spotify-integration/index')

let __token = ''

module.exports = (token) => {

    __token = token

    return {
        artists: artists(__token),
        tracks: tracks(__token)
    }

}