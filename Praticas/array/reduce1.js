const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 8.8, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultados = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultados)
//Reduce -> reduzir a um só resultado
//Map -> passar uma funçao e retornar um novo array
//Filter -> Passa uma funçao e retorna um novo array, com elementos q passaram no teste