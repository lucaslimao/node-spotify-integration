const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')

const uri = '/artists'

const byId = client => async id => {

    try{
        return await client.get(`${uri}/${id}`)
    } catch (error) {
        return await utils.error(error)
    }

}

const releated = client => async id => {

    try {
        return await client.get(`${uri}/${id}/related-artists`)
    } catch (error) {
        return await utils.error(error)
    }
}

const search = client => async name => {

    try{
        return await client.get(`/search?q=${name}&type=artist`)
    } catch (error) {
        return await utils.error(error)
    }

}

const several = client => async artists => {

    try {
        return await client.get(`${uri}?ids=${artists}`)
    } catch (error) {
        return await utils.error(error)
    }

}

module.exports = (token) => {

    const client = serviceClient(token)

    return {
        byId: byId(client),
        releated: releated(client),
        search: search(client),
        several: several(client)
    }

}