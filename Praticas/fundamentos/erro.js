function tratarErroELancar(erro) {
    //throw new error ('...')
    //throw 10
    throw 'Mensagem'; //Throw 'cria' o próorio erro
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');
    }
    catch (e){
        tratarErroELancar(e);
    }
    finally {
        console.log('Final');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj);