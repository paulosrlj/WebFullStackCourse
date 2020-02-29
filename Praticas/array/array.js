console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Albia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana'];
//aprovados.splice(1, 1) //Exclui de um indice até o outro
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //(O indice onde começa, até qual indice apaga, 'O elemento q vai substituir', 'outro elemento')
console.log(aprovados)
