
const client_id = 'e0a41834a1ce4698bce14ce49f41cedf'
const client_secret = '240c9d94c954411590004aa64f5ad961'

const chai = require('chai')
const service = require('../src/index')(client_id, client_secret)
const { refresh } = require('../src/spotify-integration/core/refresh-token/index')

describe('artists', () => {

    it('byId', async () => {
        const retorno = await service.artists.byId('04gDigrS5kc9YWfZHwBETP')
        chai.assert.equal(retorno.status, 200)
    })

    it('releated', async () => {
        const retorno = await service.artists.releated('04gDigrS5kc9YWfZHwBETP')
        chai.assert.equal(retorno.status, 200)
    })

    it('search', async () => {
        const retorno = await service.artists.search('Maroon 5')
        chai.assert.equal(retorno.status, 200)
    })

    it('several', async () => {
        const retorno = await service.artists.several('04gDigrS5kc9YWfZHwBETP')
        chai.assert.equal(retorno.status, 200)
    })

})

describe('tracks', () => {

    it('byId', async () => {
        const retorno = await service.tracks.byId('1')
        chai.assert.containsAllKeys(retorno, ['status', 'data'])
    })

    it('search', async () => {
        const retorno = await service.tracks.search('musica')
        chai.assert.containsAllKeys(retorno, ['status', 'data'])
    })

    it('several', async () => {
        const retorno = await service.tracks.several('track 1, track 2')
        chai.assert.containsAllKeys(retorno, ['status', 'data'])
    })

})

describe('albums', () => {

    it('byId', async () => {
        const retorno = await service.albums.byId('1')
        chai.assert.containsAllKeys(retorno, ['status', 'data'])
    })

    it('search', async () => {
        const retorno = await service.albums.search('album')
        chai.assert.containsAllKeys(retorno, ['status', 'data'])
    })

    it('several', async () => {
        const retorno = await service.albums.several('album 1, album 2')
        chai.assert.containsAllKeys(retorno, ['status', 'data'])
    })

})

describe('refresh', () => {

    it('new token', async () => {

        const retorno = await refresh(client_id, client_secret)
        chai.assert.exists(retorno, ['access_token'])

    })

})