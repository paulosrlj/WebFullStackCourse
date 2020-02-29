const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 8.8, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?
const saoBolsistas = (acumulador, bolsista) => acumulador && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(saoBolsistas))

//Desafio 2: algum aluno é bolsista?
const algumBolsista = (acumulador, bolsista) => acumulador || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))