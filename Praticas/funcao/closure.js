//Closure é o escopo criado quando uma função é declarada
//Esse escopo vai permitir a função acessar e manipular váriaveis externas à função

const y = 'Global'

function fora () {
    const y = 'Local';
    function dentro () {
        return y
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao())

/*let x = "Global"
     
function meuMetodo() {
    let x = "Local"
    return x
}
 
let teste = meuMetodo()
console.log(teste)
console.log(x)*/