let nome = 'Joao';
let nome2 = 'Ana'
nome = nome2
console.log(nome)

/*setInterval(() => {
    console.log('Ola')
}, 1000);*/

setTimeout(() => { //Executa apenas uma vez com delay
    console.log('Usando timeOut')
}, 2000);