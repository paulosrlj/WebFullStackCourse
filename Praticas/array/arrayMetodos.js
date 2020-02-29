const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //Antes do indice 2, adiciona 'Bottas' e 'Massa'
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa quebrou novamente, tirra o 'Massa'
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array, pega o novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Pega do 1 até o indice 4, porém o 4 não entra
console.log(algunsPilotos2)