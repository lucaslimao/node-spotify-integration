const { refresh } = require('../refresh-token/index')

const error = async ({ response }) => {

    if (response.status === 401) {
        return await refresh('token')
    }

    return response

}

module.exports = {
    error
}