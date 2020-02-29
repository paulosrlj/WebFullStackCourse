const moduloA = require('../../moduloA'); //'exports' não é retornado pelo 'require' e sim um referência para o 'module.exports'
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     req.write('Bom dia')
//     res.end()
// }).listen(8080)