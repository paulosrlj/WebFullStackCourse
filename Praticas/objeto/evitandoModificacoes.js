//Object.preventsExtensions -> Não permite adicionar mais atributos ao objeto, mas é possivel altera-lo ou excluir um atributo
const produto = Object.preventExtensions({ nome: 'Qualquer', preco: 1.99, tag: 'promocao' })
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -> possivel mexer nos atributos, mas não adicionar ou excluir
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //Não pode
delete pessoa.nome         //Não pode
pessoa.idade = 29          //Pode
console.log(pessoa)

//Object.freeze = selado + valores constantes(não podem ser modificados)
