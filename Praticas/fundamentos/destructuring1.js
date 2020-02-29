//NOVO RECURSO DO ES2015
//DESTRUCTURING

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //tire do objeto pessoa, o nome e a idade
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep = true}} = pessoa; //extrai logradouro, numero e cep do endereco
console.log(logradouro, numero, cep);