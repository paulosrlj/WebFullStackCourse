Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Jao', 'Nico', 'Wess']

aprovados.forEach2(function (nome, indice, array) { //1°parametro -> elemento na posicao atual do array
    console.log(`Pessoa ${indice+1} ${nome}`)       //2°parametro -> indice do array, 3°parametro -> o proprio array
})

