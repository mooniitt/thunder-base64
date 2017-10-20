const tb = require('../lib')

if(process.argv[2] === undefined){
    console.log('please input thunder uri (eg. thunder://****)')
    return 
}else{
    thunder = process.argv[2]
}

tb.decode(thunder,item=>{
    console.log('decode : '+item)
})
var com = tb.decodeSync(thunder)
console.log('decodeSync : '+com)
