const aprovados = ['Agatha', 'Jao', 'Nico', 'Wess']

aprovados.forEach(function (nome, indice, array) { //1°parametro -> elemento na posicao atual do array
    //2°parametro -> indice do array, 3°parametro -> o proprio array
    console.log(`Pessoa ${indice+1} ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(indice, '-', nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

const dobro = [2, 3, 4, 5]
dobro.forEach((numero, indice, array) => {
    array[indice] = Math.pow(numero, 2)
})
console.log(dobro)