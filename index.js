"use strict";

const restify = require('restify')
const plugins = require('restify-plugins')
const assert = require('assert')
const corsMiddleware = require('restify-cors-middleware')
const mongodb = require('mongodb')

let Mongo = require('./koneksidb/getConnect')
let mhsRoute = require('./Mahasiswa/mahasiswaRoute')
let mklRoute = require('./Matakuliah/matakuliatRoute')

const server = restify.createServer()

const cors = corsMiddleware({
    'origins':['*']
})

server.pre(cors.preflight)
server.use(cors.actual)
server.use(plugins.jsonBodyParser({
    mapParams: true
}))
server.use(plugins.acceptParser(server.acceptable))
server.use(plugins.queryParser({
    mapParams: true
}))
server.use(plugins.fullResponse())

Mongo.konek((err, client) => {
    assert.equal(null,err)
    const db = client.db("mahasiswa")
    mhsRoute.MahasiswaRoute({server,db})
    mklRoute.MatakuliahRoute({server,db})
})

server.listen("3001", () => {
    console.log("running at port 3001")
})