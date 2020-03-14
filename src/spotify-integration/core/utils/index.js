const { refresh } = require('../refresh-token/index')

const error = async ({ response }, client_id, client_secret) => {

    if (response.status === 401) {
        return await refresh(client_id, client_secret)
    }

    return {
        status: response.status,
        data: response.data
    }

}

module.exports = {
    error
}