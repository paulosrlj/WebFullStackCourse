const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', { //(target, propriedade, caracteristicas(objeto com as caracteristicas))
    enumerable: true, //Vai ser listado
    writable: false, //Vai aceitar ser modificado?
    value: '01/01/2019'
})

console.log(pessoa)

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {
    a: 1
}
const o1 = {
    b: 1
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2) //retorna o objeto destino, no caso o objeto 'dest'
console.log(obj)

