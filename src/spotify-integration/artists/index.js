const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')

const uri = '/artists'

const byId = (client, client_id, client_secret) => async id => {

    try {

        const { status, data } = await client.get(`${uri}/${id}`)

        return {
            status,
            data
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, byId, id)
    }

}

const releated = (client, client_id, client_secret) => async id => {

    try {

        const { status, data } = await client.get(`${uri}/${id}/related-artists`)

        return {
            status,
            data: data.artists
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, releated, id)
    }
}

const search = (client, client_id, client_secret) => async name => {

    try{

        const { status, data } = await client.get(`/search?q=${name}&type=artist`)

        return {
            status,
            data: data.artists
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, search, name)
    }

}

const several = (client, client_id, client_secret) => async artists => {

    try {

        const { status, data } = await client.get(`${uri}?ids=${artists}`)

        return {
            status,
            data: data.artists.items
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, several, artists)
    }

}

module.exports = (client_id, client_secret) => {

    const client = serviceClient()

    return {
        byId: byId(client, client_id, client_secret),
        releated: releated(client, client_id, client_secret),
        search: search(client, client_id, client_secret),
        several: several(client, client_id, client_secret)
    }

}