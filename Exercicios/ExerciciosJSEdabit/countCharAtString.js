function charCount(myChar, str) {
    let cont = 0;
    for(let i = 0; i < str.length; i++)
        if(str.charAt(i) === myChar)
            cont++;
    return cont;
}

console.log(charCount("a", 'Ama'))