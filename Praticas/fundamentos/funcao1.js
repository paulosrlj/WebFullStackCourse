//função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //Passa undefined como segundo parametro
imprimirSoma(2, 3, 5, 8, 10) //Ignora o resto dos números depois do 3
console.log("=============");
//Função com retorno

function soma(a, b = 1) { //Coloca um valor padrão para o b, caso não seja passado um b
    return a + b
}

//soma(2, 3)   //retorna o valor, mas não mostra
console.log(soma(2, 3))
console.log(soma(2))