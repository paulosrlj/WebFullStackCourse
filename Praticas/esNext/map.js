const tecnologias = new Map()
tecnologias.set('react', {
    framework: false
})
tecnologias.set('angular', {
    framework: true
})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework) //Forma correta de se acessar

const chavesVariadas = new Map([
    [function () {}, 'Função'], //Chave/valor
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a') // A chave não aceita repetição, o valor sim
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)