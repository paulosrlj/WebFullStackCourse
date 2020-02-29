const [a] = [10]; //a recebe o primeiro elemento 10 do array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //atribui os valores do array as variáveis, ignorando os espaçoes em branco
console.log(n1,n3, n5, n6);

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota);