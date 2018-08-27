'use strict'

exports.getMhs = (collection, callback) => {
    let query = {};

    collection
        .find(query)
        .toArray()
        .then(callback)
}

exports.postMhs = (value, collection, callback) => {
    collection
      .insert(value)
      .then(callback)
}

exports.delMhs = (akses, collection, callback) => {
    collection
      .remove({
        Kode_Mahasiswa: akses
      })
      .then(callback)
}

exports.putMhs = (akses, value, collection, callback) => {
    collection.update({
        Kode_Mahasiswa : akses
    }, value)
    .then(callback)
}
