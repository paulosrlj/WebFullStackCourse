//Cadeira de protótipos (prototype chain)
Object.prototype.atri0 = '0'; //Não faça isso em casa
const avo = {
    atri1: 'A'
}
const pai = {
    __proto__: avo,
    atri2: 'B',
    atri3: '3'
}
const filho = {
    __proto__: pai,
    atri3: 'C'
}
console.log(filho.atri1);
console.log(filho.atri0, filho.atri1, filho.atri2, filho.atri3) //Não tem a propriedade, procura nos objetos pais

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())