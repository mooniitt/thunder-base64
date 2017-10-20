const tb = require('../lib')

if(process.argv[2] === undefined){
    console.log('please input common uri : (eg. http://*****)')
    return
}
let common = process.argv[2]
tb.encode(common,item=>{
    console.log('encode : '+item)
})
common = tb.encodeSync(common)
console.log('encodeSync : '+common)