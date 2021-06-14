// Spread :- ...
// Spread is used to expand an array or object literal.
// mainly used to copy array and object into another array and object


let name = {
    firstName:'Prashant',
    lastName: 'Jha'
}
let name2 = {...name, age:27};
console.log(name2)

const nameArr = ['Prashant', 'Jha'];
const nameArr2 = [...nameArr, 27];
console.log(nameArr2);


//Rest :- ...
// to accept n number of arguments in a function

function printArr(...n){
    console.log(n)
}
printArr(1,2,3,4,5,6)