'use strict'

const mongodb = require('mongodb')

const konek =  function(callback) {
    mongodb.connect('mongodb://@localhost:27017',callback)
}

module.exports = {konek:konek}