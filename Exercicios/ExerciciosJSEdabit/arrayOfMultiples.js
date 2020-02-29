// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

const funcao = (num, length) => {
    const array = []

    for (let i = 1; i <= length; i++)
        array.push(num * i);

    return array;
}

console.log(funcao(7, 5))