// pessoa -> 123 -> {...}
const pessoa = {nome: 'Paulo'}
pessoa.nome = 'Pedro'
console.log(pessoa)


// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Congela o objeto, não se pode mexer mais nele
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua avenida'
delete pessoa.nome
delete pessoa

console.log(pessoa)

const objetoConstante = Object.freeze({nome: 'João'})