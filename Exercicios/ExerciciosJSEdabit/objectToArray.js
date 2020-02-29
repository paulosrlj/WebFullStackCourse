// Convert object to array

//convertToArray = obj => Object.entries(obj),

const toArray = obj => Object.keys(obj).map(key => [key, obj[key]])	

//[a, b]

console.log(toArray({"a": 1, "b": 5}))
