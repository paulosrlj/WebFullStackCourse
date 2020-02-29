var numero = 1;

{
    var numero = 2;
    console.log(`Dentro: ${numero}`); //Var ignora os blocos de código com excessão a função
}

console.log(`Fora: ${numero}`);