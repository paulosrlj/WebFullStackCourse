function keysAndValues(obj) {
    const keys = obj.filter(key => key)
    const values = obj.filter(value => obj[value])
    return [keys, values]
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))