function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

let notebook = criarProduto('Notebook', 1500)
console.log(notebook)
console.log(criarProduto('PC', 2199))
