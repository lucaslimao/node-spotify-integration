const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')

const uri = '/tracks'

const byId = (client, client_id, client_secret) => async (id) => {

    try {

        const { status, data } = await client.get(`${uri}/${id}`)

        return {
            status,
            data
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret)
    }

}

const search = (client, client_id, client_secret) => async (name) => {

    try {

        const { status, data } = await client.get(`/search?q=${name}&type=track`)

        return {
            status,
            data: data.tracks.items
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret)
    }

}

const several = (client, client_id, client_secret) => async (tracks) => {

    try {

        const { status, data } = await client.get(`${uri}?ids=${tracks}`)

        return {
            status,
            data: data.tracks.items
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret)
    }

}

module.exports = (token, client_id, client_secret) => {

    const client = serviceClient(token)

    return {
        byId: byId(client, client_id, client_secret),
        search: search(client, client_id, client_secret),
        several: several(client, client_id, client_secret)
    }

}