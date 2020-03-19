const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')
const { logger } = require('musii-node-helper')

const uri = '/artists'

const logPrefix = '[Artists]'

const byId = (client, client_id, client_secret) => async id => {

    utils.isValid(id)

    try {

        logger.info(`${logPrefix} ById, Id = ${id}`)

        const { status, data } = await client.get(`${uri}/${id}`)

        logger.info(`${logPrefix} ById, Id = ${id}, Success`)

        return {
            status,
            data
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, byId, id)
    }

}

const releated = (client, client_id, client_secret) => async id => {

    utils.isValid(id)

    try {

        logger.info(`${logPrefix} Releated, Id = ${id}`)

        const { status, data } = await client.get(`${uri}/${id}/related-artists`)

        logger.info(`${logPrefix} Releated, Id = ${id}, Success`)

        return {
            status,
            data: data.artists
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, releated, id)
    }
}

const search = (client, client_id, client_secret) => async name => {

    utils.isValid(name)

    try{

        logger.info(`${logPrefix} Search, Name = ${name}`)

        const { status, data } = await client.get(`/search?q=${name}&type=artist`)

        logger.info(`${logPrefix} Search, Name = ${name}, Success`)

        return {
            status,
            data: data.artists
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, search, name)
    }

}

const several = (client, client_id, client_secret) => async artists => {

    utils.isValid(artists)

    try {

        logger.info(`${logPrefix} Several, `)

        const { status, data } = await client.get(`${uri}?ids=${artists}`)

        logger.info(`${logPrefix} Several, Success`)

        return {
            status,
            data: data.artists
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