// Criar uma função que recebe uma string, que retorna uma função que retorna a string

function redundant(str){
    return () => str
}

console.log(redundant('Ola'))