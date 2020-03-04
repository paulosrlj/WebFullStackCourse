// nameShuffle("Donald Trump") ➞ "Trump Donald"

const nameShuffle = str => {
    let sep = 0

    for (i in str)
        if (str[i] === ' ')
            sep = i

    let firstName = str.substring(0, sep)
    let lastName = str.substring(sep).trim() + ' '

    return lastName + firstName
}

console.log(nameShuffle('Donald Trump'))