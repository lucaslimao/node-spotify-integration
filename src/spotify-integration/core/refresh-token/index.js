const axios = require('axios')
const querystring = require('querystring');

const refresh = async (client_id, client_secret) => {

    const encode = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

    const config = {
        headers: {
            'Authorization': `Basic ${encode}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    };

    try {

        return await axios.post(
            'https://accounts.spotify.com/api/token',
            querystring.stringify({ grant_type: 'client_credentials' }),  
            config
        );

    } catch (error) {
        throw error
    }

    
}

module.exports = {
    refresh: refresh
}