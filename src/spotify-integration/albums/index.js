const serviceClient = require('../core/client/index')
const utils = require('../core/utils/index')
const { logger } = require('musii-node-helper')

const uri = '/albums'

const logPrefix = '[Albums]'

const byId = (client, client_id, client_secret) => async (id) => {

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

const search = (client, client_id, client_secret) => async (name) => {

    utils.isValid(name)

    try {

        logger.info(`${logPrefix} Search, Name = ${name}`)

        const { status, data } = await client.get(`/search?q=${name}&type=album`)

        logger.info(`${logPrefix} Search, Name = ${name}, Success`)

        return {
            status,
            data: data.albums
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, search, name)
    }

}

const several = (client, client_id, client_secret) => async (albums) => {

    utils.isValid(albums)

    try {

        logger.info(`${logPrefix} Several, `)

        const { status, data } = await client.get(`${uri}?ids=${albums}`)

        logger.info(`${logPrefix} Several, Success`)

        return {
            status,
            data: data.albums
        }

    } catch (error) {
        return await utils.error(error, client_id, client_secret, several, albums)
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