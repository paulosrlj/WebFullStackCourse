//noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

const noOdds = arr => arr.filter(element => element % 2 === 0)
console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]))