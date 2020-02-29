function returnCash(cash){
    return `R$ ${cash.toFixed(2).replace('.', ',')}`;
}

console.log(returnCash(0.30000000000000004))