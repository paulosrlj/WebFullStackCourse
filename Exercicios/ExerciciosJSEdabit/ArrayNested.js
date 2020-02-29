/* arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max. */

ArrayCanNested = (array1, array2) => {
    if(array1.reduce((anterior, atual) => Math.min(anterior, atual)) > 
    array2.reduce((anterior, atual) => Math.min(anterior, atual)) && 
    array1.reduce((anterior, atual) => Math.max(anterior, atual)) < 
    array2.reduce((anterior, atual) => Math.max(anterior, atual)))
        return true;

    return false;   
}

console.log(ArrayCanNested([9, 9, 8], [8, 9]))