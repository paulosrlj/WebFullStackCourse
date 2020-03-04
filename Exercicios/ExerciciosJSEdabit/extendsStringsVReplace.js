//Write a function, .vreplace() that extends the String prototype by replacing 
//all vowels in a string with a specified vowel.

//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function (vowel) {
    let str = this
    str = Object.values(str)

    for (i in str) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
            str[i] = vowel
    }
    return str.join('')
}

let str = 'stuffed jalapeno poppers'

console.log(str.vreplace('e'))