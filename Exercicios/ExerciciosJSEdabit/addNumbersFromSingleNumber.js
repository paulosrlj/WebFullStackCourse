/* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/

function addUp (num) {
    if(num === 0)
        return num;

    return num + addUp(num - 1)
}

console.log(addUp(4))