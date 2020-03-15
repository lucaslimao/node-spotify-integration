const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')

const uri = '/tracks'

const byId = (client, client_id, client_secret) => async (id) => {

    utils.isValid(id)

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

const search = (client, client_id, client_secret) => async (name) => {

    utils.isValid(name)

    try {

        const { status, data } = await client.get(`/search?q=${name}&type=track`)

        return {
            status,
            data: data.tracks
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, search, name)
    }

}

const several = (client, client_id, client_secret) => async (tracks) => {

    utils.isValid(tracks)

    try {

        const { status, data } = await client.get(`${uri}?ids=${tracks}`)

        return {
            status,
            data: data.tracks
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, several, tracks)
    }

}

module.exports = (client_id, client_secret) => {

    const client = serviceClient()

    return {
        byId: byId(client, client_id, client_secret),
        search: search(client, client_id, client_secret),
        several: several(client, client_id, client_secret)
    }

}