const prod1 = {}; //|Criou um objeto graças as chaves
prod1.nome = 'Celular Ultra Mega'; //Recomendado, cria a propriedade nome e adiciona 'Celular Ultra Mega'
prod1.preco = 4999.50;
console.log(prod1)

prod1['Desconto_legal'] = 0.40; //Não recomendado
console.log(prod1);

const prod2 = { //Criação literal de objeto
    nome: 'Camisa polo',
    preco: 79.90,
}

console.log(prod2)


// JSON '{"nome": "Camisa Polo", "Preco": 79.90 }'