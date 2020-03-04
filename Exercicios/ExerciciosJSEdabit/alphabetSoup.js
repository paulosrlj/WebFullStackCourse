const AlphabetSoup = str => {
    str = str.split('')
    return str.sort().join('')
}

console.log(AlphabetSoup('hello'))