const chai = require('chai')
const service = require('../src/index')('tokenizar')

describe('artists', () => {

    it('byId', () => {
        const retorno = service.artists.byId('1')
    })

    it('releated', () => {
        const retorno = service.artists.releated('1')
    })

    it('search', () => {
        const retorno = service.artists.search('artista')
    })

    it('several', () => {
        const retorno = service.artists.several('artista 1, artista 2')
    })

})

describe('tracks', () => {

    it('byId', () => {
        const retorno = service.tracks.byId('1')
    })

    it('search', () => {
        const retorno = service.tracks.search('musica')
    })

    it('several', () => {
        const retorno = service.tracks.several('track 1, track 2')
    })

})

describe('refresh', () => {

    it('new token', () => {
        const retorno = service.refresh()
    })

})