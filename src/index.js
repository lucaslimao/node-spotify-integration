const { artists, tracks } = require('./spotify-integration/index')

let __token = ''

const refresh = () => {
    return __token
}

module.exports = (token) => {

    __token = token

    return {
        artists: artists(__token),
        refresh: () => {
            return refresh()
        },
        tracks: tracks(__token)
    }

}