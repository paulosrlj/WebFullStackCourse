const fs = require('fs')

const produto = {
    nome: "celular",
    preco: 1299,
    desconto: 0.15,
    marca: 'Samsung'
}

/*fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})*/

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), error => {
    console.log(error || 'Sucesso')
})