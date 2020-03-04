/* difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18 */

const difference = arr => {
    let largest = arr.reduce((accumulator, current) => Math.max(accumulator, current))
    let smallest = arr.reduce((accumulator, current) => Math.min(accumulator, current))
    return largest - smallest
}

console.log(difference([0, 8, 2, 6, 9]))