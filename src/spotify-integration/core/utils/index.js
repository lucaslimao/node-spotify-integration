const { refresh } = require('../refresh-token/index')
const clientService = require('../client/index')
const { logger } = require('musii-node-helper')

const error = async ({ response }, client_id, client_secret, fn, params) => {

    if (response.status === 401) {

        try {

            const { data } = await refresh(client_id, client_secret)
            
            const client = clientService()

            client.token(data.access_token)

            return await fn(client, client_id, client_secret)(params)

        } catch(error) {  

            error && logger.error(`[Spotify][Error] ${error.message}`)

            return {
                status: 401,
                data: 'Not Authorize'
            }

        }

    }

    return {
        status: response.status,
        data: response.data
    }

}

const isValid = (item) => {

    if (!item || item === undefined || item === '') {
        throw new Error('Invalid Value')
    }

}

module.exports = {
    error,
    isValid
}