/* Create a function that concatenates n input arrays, where n is variable.
Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7] */

function concatena() {
    let array = [];
    for (let i = 0; i < arguments.length; i++){
        array = array.concat(arguments[i])
        
    }
    return array
}

console.log(concatena([1, 2], [3, 4]))

