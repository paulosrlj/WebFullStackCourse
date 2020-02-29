const notas = [6.7, 7.4, 9.6, 2.2, 1.1];

for(i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    Nome: "Ana",
    Sobrenome: "Silva",
    Idade: 29
};

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}