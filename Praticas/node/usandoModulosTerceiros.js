const _ = require('lodash')
setInterval(() => console.log(_.random(1, 100)), 2000);


/*function numRepetido(arr, num) {
    for (let i = 0; i < arr.length; i++)
        if (num === arr[i])
            return true;
    return false;
}

for (let i = 0; i < 10; i++) {
    let num = _.random(1, 10)
    while (numRepetido(arr, num))
        num = _.random(1, 10)
    arr.push(num)
}

console.log(arr)*/