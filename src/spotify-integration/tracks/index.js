const uri = '/tracks'

const byId = (token, id) => {
    return id
}

const search = (token, name) => {
    return name
}

const several = (token, tracks) => {
    return tracks
}

module.exports = (token) => {

    return {
        byId: (id) => {
            byId(token, id)
        },
        search: (name) => {
            search(token, name)
        },
        several: (tracks) => {
            several(token, tracks)
        }
    }

}