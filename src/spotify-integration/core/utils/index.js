const { refresh } = require('../refresh-token/index')
const clientService = require('../client/index')

const error = async ({ response }, client_id, client_secret, fn, params) => {

    if (response.status === 401) {

        const { data } = await refresh(client_id, client_secret)
        
        const client = clientService()

        client.token(data.access_token)

        try {
            return await fn(client, client_id, client_secret)(params)
        } catch(error) {
            throw error
        }

    }

    return {
        status: response.status,
        data: response.data
    }

}

const isValid = (item) => {

    if (!item || item === undefined || item === '') {
        throw new Error('Invalid value')
    }

}

module.exports = {
    error,
    isValid
}