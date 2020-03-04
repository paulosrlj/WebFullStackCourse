const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//Axios é um client HTTP, faz requisições para obter algo remoto

const chineses = func => func.pais === 'China'
const mulheres = func => func.genero === 'F'
const menorSal = (anterior, atual) => {
    return (anterior.salario < atual.salario) ? anterior : atual
}

axios.get(url).then(response => {
    const funcionarios = response.data //response.data retorna já os objetos do json
    //console.log(response)
    //console.log(funcionarios)
    //console.log(response.status)
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSal))
})

//Para rodar um script no json, como o 'dev' -> npm run dev 