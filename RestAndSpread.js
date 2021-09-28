// Spread :- ...
// Spread is used to expand an array or object literal.
// mainly used to copy array and object into another array and object


let name = {
    firstName:'Prashant',
    lastName: 'Jha'
}

const bio = {...name, age:27}
console.log(bio)

const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5];
console.log(arr2);


//Rest :- ...
// to accept n number of arguments in a function

function Rest(...n){
    console.log(n);
}
Rest(1, 2, 3, 4, 5, 6);