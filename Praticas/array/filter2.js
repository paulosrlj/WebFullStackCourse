Array.prototype.filter2 = function (callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            array.push(this[i])
    }
    return array
}

const produtos = [{
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'iPad Pro',
        preco: 4000,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 12.49,
        fragil: false
    }
]

console.log(produtos.filter(function (p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))