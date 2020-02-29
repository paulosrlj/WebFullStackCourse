console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) //OBS MUITO IMPORTANTE ----- 'this' e 'exports', contém uma referência para 'module.exports'
//                                                 -----  dessa forma, quando atribuimos: exports = null, o que foi mudado foi
//                                                 -----  a referência de 'exports', e não 'module.exports'
exports = {
    nome: 'teste'
}

console.log(module.exports)
module.exports = {
    publico: true
}