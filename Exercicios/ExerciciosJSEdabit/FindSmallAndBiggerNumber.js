/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order. */

function minMax(arr) {
    let min = arr.reduce((anterior, proximo) => Math.min(anterior, proximo));
    let max = arr.reduce((anterior, proximo) => Math.max(anterior, proximo));
    return [min, max]; 
}

console.log(minMax([1, 2, 6, 8]))