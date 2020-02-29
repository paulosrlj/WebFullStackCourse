const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retorna uma casa vazia
console.log(escola.charCodeAt(3)) //retorna o número ASC
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // Exibe a partir do index 1
console.log(escola.substring(0, 3)) //Exibe do index 0 até o 3

console.log('Escola '.concat(escola).concat("!")) //Concatena
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //Transforma em um array as palavras delimitadas por ','