const chai = require('chai')
const service = require('../src/index')('BQAcb1fHvXogZbb1HiZsziU-JEEQFea5LcE7usJPsjXSno7bmAVZonu4nQHhMUm4FHYv4aNoYp1zazP_ziU')

describe('artists', () => {

    it('byId', async () => {
        const retorno = await service.artists.byId('1')
    })

    it('releated', async () => {
        const retorno = await service.artists.releated('1')
    })

    it('search', async () => {
        const retorno = await service.artists.search('artista')
    })

    it('several', async () => {
        const retorno = await service.artists.several('artista 1, artista 2')
    })

})

describe('tracks', () => {

    it('byId', async () => {
        const retorno = await service.tracks.byId('1')
    })

    it('search', async () => {
        const retorno = await service.tracks.search('musica')
    })

    it('several', async () => {
        const retorno = await service.tracks.several('track 1, track 2')
    })

})

describe('refresh', () => {

    it('new token', async () => {
        
    })

})