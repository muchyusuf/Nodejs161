'use strict'

exports.getMkl = (ctx, callback) => {
    const collection = ctx

    let query = {};

    collection
        .find(query)
        .toArray()
        .then(callback)
}

exports.postMkl = (value, ctx, callback) => {
    const collection = ctx
    const data = value
    collection
      .insert(data)
      .then(callback)
}

exports.delMkl = (akses, ctx, callback) => {
    const collection = ctx
    collection
      .remove({
        Kode_Matakuliah: akses
      })
      .then(callback)
}

exports.putMkl = (akses, value, ctx, callback) => {
    const collection = ctx
    const data = value
    collection.update({
        Kode_Matakuliah : akses
    }, data)
    .then(callback)
}
