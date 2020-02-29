function teste1(num) {
    if(num > 7){
        console.log(num)    //APENAS A PRIMEIRA LINHA ESTÁ ASSOCIADA AO IF
        console.log('Final') 
    }
}

//teste1(6)
//teste1(8)

function teste2(num) {
    if(num > 7); //Condicional vazio
    {
        console.log(num) //Não está associado ao if de cima
                         //Não usar ; em estruturas de controle
    }
}

teste2(6)
teste2(8)