console.log(soma(3, 5));


// function declaration - Interpretador carrega toas as funçoes antes de executar
function soma (x, y) {
    return x + y;
}

//function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(10, 4));

//named function expression
const mult = function mult (x,y) {
    return x * y;
}
console.log(mult(3, 4))