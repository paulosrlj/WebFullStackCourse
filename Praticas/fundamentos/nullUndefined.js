let valor; //Não inicializada
console.log(valor);

valor = null; //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Não é possível acesar propriedades de uma variavel com valor nulo

const produto = {};
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixe o programa fazer isso
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null;
console.log(!!produto.preco)
console.log(produto)