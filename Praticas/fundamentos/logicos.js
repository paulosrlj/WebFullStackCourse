function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; //OR
    const comprarTV50 = trabalho1 && trabalho2; //AND
    const comprarTV32 =  trabalho1 != trabalho2; //XOR
    const manterSaudavel = !comprarSorvete // Operador unário 

    return {comprarSorvete: comprarSorvete, comprarTV50, comprarTV32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));