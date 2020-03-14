const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')

const uri = '/tracks'

const byId = client => async (id) => {

    try {
        return await client.get(`${uri}/${id}`)
    } catch (error) {
        return await utils.error(error)
    }

}

const search = client => async (name) => {

    try {
        return await client.get(`/search?q=${name}&type=track`)
    } catch (error) {
        return await utils.error(error)
    }

}

const several = client => async (tracks) => {

    try {
        return await client.get(`${uri}?ids=${tracks}`)
    } catch (error) {
        return await utils.error(error)
    }

}

module.exports = (token) => {

    const client = serviceClient(token)

    return {
        byId: byId(client),
        search: search(client),
        several: several(client)
    }

}