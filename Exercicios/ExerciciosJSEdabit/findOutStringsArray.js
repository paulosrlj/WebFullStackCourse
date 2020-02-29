/*function filterArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string' && isNaN(arr[i]) === false)
            newArr.push(arr[i]);
    }
    return newArr;
}*/

function filterArray(arr){
    return arr.filter((value, index) => typeof value !== 'string' && isNaN(value) === false)
}

console.log(filterArray([1, 2, "a", "b", "15"]))