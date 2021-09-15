const bio = [
    {
    firstName:'Prashnt',
    lastName: 'Jha',
    age:27
}, {
    firstName:'Priyanka',
    lastName:'Chopra',
    age:38
}, {
    firstName:'Donald',
    lastName:'Trump',
    age: 57
}
]
const firstName = bio.map(value=>value.firstName);
console.log(firstName)

const sumOfAge = bio.reduce((acc, current)=>{
    acc = acc+current.age
    return acc
}, 0)
console.log(sumOfAge)

const ageLessThan40 = bio.filter(value=>value.age<40).map(value=>value.firstName+" "+value.lastName)
console.log(ageLessThan40)
