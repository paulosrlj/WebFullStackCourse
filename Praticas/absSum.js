function getAbsSum(arr) {
    return arr.reduce((acc, e) => {
        return acc + Math.abs(e)
    }, 0)
}

console.log(getAbsSum([2, -1, 4, 8, 10]))

let arr = ''
arr += [1, 2, 3] + [6, 4, 2]
console.log()