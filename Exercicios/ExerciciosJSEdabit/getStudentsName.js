const getStudentNames = students => students.map(element => element.name)

console.log(getStudentNames([{
        name: "Steve"
    },
    {
        name: "Mike"
    },
    {
        name: "John"
    }
]))

/*
Examples
getStudentNames([ { name: "Steve" }, { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
*/