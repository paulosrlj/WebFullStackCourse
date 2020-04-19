//com promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}


//Recurso do ES8
//Objetivo: simplificar o uso de promises

// async function obterAlunos() {
//     const ta = await getTurma('A')
//     const tb = await getTurma('B')
//     const tc = await getTurma('C')
//     return [].concat(ta, tb, tc)
// } //retorna um objeto AsyncFunction, retorna uma promise


// obterAlunos()
//     .then(alunos => alunos.map(a => a.nome))
//     .then(nome => console.log(nome))


let obterAlunos = async () => {
    let turmas = await Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])

    let tA = await turmas[0].map(aluno => aluno.nome)
    let tB = await turmas[1].map(aluno => aluno.nome)
    let tC = await turmas[2].map(aluno => aluno.nome)

    return [].concat(tA, tB, tC)

}

obterAlunos()
    .then(turma => console.log(turma))

console.log('Isso vem primeiro')