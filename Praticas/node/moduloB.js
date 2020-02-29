module.exports = { //'exports' não é retornado pelo require e sim uma referência para 'module.exports'
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

module.exports.bye = 'Tchau Tchau'