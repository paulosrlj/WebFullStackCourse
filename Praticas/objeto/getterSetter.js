const sequencia = {
    _valor: 1, //convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor)

/*function Sequencia(){
    let valor = 1
 
    this.getValor = function() {
        return valor++
    }
 
    this.setValor = function(valorNovo) {
        if (valorNovo > valor) {
            valor = valorNovo
        } else {
            console.log("O novo valor deve ser maior que o anterior.")
        }
    }
}*/

var variavel = {
    valor: 0,

    get moeda() { // define o get moeda
        return "R$ " + this.valor.toFixed(2).replace(".", ",");
    },
    /*get int() { // define o get integer
      return this.valor;
    },  */
    set moeda(i) {  // define o set
        this.valor = i;
    }
}

console.log(variavel.moeda);
variavel.moeda = 25.00;
console.log(variavel.moeda);

variavel['moeda'] = 30.00;
console.log(variavel.moeda);

let pessoa = {
    firstName: 'Paulo',
    lastName: 'Sérgio Rodrigues Leite Junior',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    get FName() {
        return `${this.firstName}`
    },
    set Fname(fn) {
        this.firstName = fn
    },


    get LName() {
        return `${this.lastName}`
    },
    set Lname(ln) {
        this.lastName = ln
    }

}

console.log(pessoa.fullName)
console.log(pessoa.FName)
console.log(pessoa.LName)
pessoa.firstName = 'João'
pessoa.lastName = 'Miranda'
console.log(pessoa.firstName)
console.log(pessoa.lastName)