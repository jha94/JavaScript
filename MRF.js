const bio = [
    {firstName:'Prashant', lastName:'Jha', age:28},
{firstName:'Priyanka', lastName:'Chopra', age:39},
{firstName:'Donald', lastName:'Trump', age:57},
]
const firstNames = bio.map(value=>value.firstName);
console.log('firstNames', firstNames);
const ageLessthan40  = bio.filter((value)=>{
    if(value.age<40){
        return value
    }
}).map(value=>value.firstName+" "+value.lastName)
console.log('ageLessthan40',ageLessthan40);

const nums = [1,2,3,4,5];
const sum = nums.reduce((acc,current)=>{
    acc = acc+current;
    return acc;
},0)
console.log('sum', sum);