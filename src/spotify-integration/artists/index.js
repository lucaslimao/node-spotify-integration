const client = require('../core/client/index')

const uri = '/artists'

const byId = (id) => {
    return id
}

const releated = (id) => {
    return id
}

const search = (name) => {
    return name
}

const several = (artists) => {
    return client.get(`artists?ids=${artists}`)
}

module.exports = (token) => {

    client(token)

    return {
        byId: (id) => {
            byId(id)
        },
        releated: (id) => {
            releated(id)
        },
        search: (name) => {
            search(name)
        },
        several: (artists) => {
            several(artists)
        }
    }

}