const numberSyllables = str => {
    let cont = 0
    for (let i = 0; i < str.length; i++)
        if (str.charAt(i) === '-')
            cont++
    return ++cont
}

console.log(numberSyllables("on-o-mat-o-poe-ia"))