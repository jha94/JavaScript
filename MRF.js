const bio = [
    {
        firstName:'Prashant',
        lastName: 'Jha',
        age:27
    },{
        firstName:'Priyanka',
        lastName:'Chopra',
        age:39
    },{
        firstName:'Donald',
        lastName:'Trump',
        age:59
    }
]

const firstnames = bio.map((value)=>value.firstName);
console.log(firstnames);

const sumOfAges = bio.reduce((acc, current)=>{
    acc = acc+current.age;
    return acc;
}, 0)
console.log(sumOfAges);

const ageLessThan40 = bio.filter((value)=>value.age<40).map(value=>value.firstName+" "+value.lastName);
console.log(ageLessThan40);