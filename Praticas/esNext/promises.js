function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //reject(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que legal').then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))


function outraPromise() {
    return new Promise((resolve, reject) => {
        resolve(() => console.log('Nice'))
    })
}

outraPromise().then(frase => frase())