const fs = require('fs')

const decode = function (uri, callback) {
  uri = uri.replace(/thunder:\/\//,'')
  let base64 = new Buffer.from(uri,'base64')
  let commenUri = base64.toString().slice(2,-2)
  callback(commenUri)
}

const decodeSync = function(uri){
  uri = uri.replace(/thunder:\/\//,'')
  let base64 = new Buffer.from(uri,'base64')
  let commenUri = base64.toString().slice(2,-2)
  return commenUri
}

const encode = function(uri, callback){
  uri += 'AA'+uri+'ZZ'
  let utf8 = new Buffer.from(uri,'utf8')
  let thunderUri = 'thunder://'+utf8.toString('base64')
  callback(thunderUri)
}

const encodeSync = function(uri){
  uri += 'AA'+uri+'ZZ'
  let utf8 = new Buffer(uri,'utf8')
  let thunderUri = 'thunder://'+utf8.toString('base64')
  return thunderUri
}

module.exports = {
  encode,
  encodeSync,
  decode,
  decodeSync
}
