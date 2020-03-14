const artists = require('./artists/index')
const core = require('./core/refresh-token/index')
const tracks = require('./tracks/index')

module.exports.artists = artists

module.exports.tracks = tracks

module.exports.core = core