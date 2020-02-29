// par nome/valor
const saudacao = 'Opa' //Contexto léxico 1

function exec() {
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao;
}

//Objetos que são aninhados pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        Logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());