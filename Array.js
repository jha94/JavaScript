// JavaScript/TypeScript array operations

let arr = [1,2,4];
arr.pop();                      //deletes last element
console.log(arr)                // [1, 2]

arr.unshift();                  // gets the last element but doesn't delete it
console.log(arr.unshift())      // 2
console.log(arr);               // [1, 2]

arr.shift();                    // deletes first element
console.log(arr);               // [2]

arr.push(4);                    // push element at last indesx of array
console.log(arr);               // [2, 4]
arr.push(1); 
arr.push(3);
arr.push(7);

console.log(arr.slice(2,4));    // returns shallow copy of array from start to end-1 [1, 3]
console.log(arr);               // [2, 4, 1, 3, 7]

//chnages the content of array by removing or placing existing elements in place
arr.splice(0,2);
console.log(arr);               // [1, 3, 7]

arr.splice(0,2, 10,11);
console.log(arr);               // [10, 11, 7]


const add2 = arr.map(value=>value+2);                   //map is used to perform operation on every elements of array
console.log(add2);                                      // [ 12, 13, 9 ]
const greaterThan7 = arr.filter(value=>value>7);        //filter is used to filter out the value of an array
console.log(greaterThan7);                              // [10, 11]

// reduce is callback function on each element of the array, 
// passing in the return value from the calculation on the preceding element

const sum = arr.reduce((acc, current)=>{
    acc+=current;
    return acc;
},0)
console.log(sum)                    // 28



//-------******COMPLEMENTARY*******--------//

const bio = [
    {firstName:'Prashant', lastName:'Jha', age:29},
    {firstName:'Priyanka', lastName:'Chopra', age:39},
    {firstName:'Donald', lastName:'Trump', age:57},
]

const names = bio.map(value=>value.firstName+" "+value.lastName);
console.log(names);                     // [ 'Prashant Jha', 'Priyanka Chopra', 'Donald Trump' ]

const namesWhoseAgeLessThan40 = bio.filter(value=>{
    if(value.age<40){
        return value
    }
}).map(value=>value.firstName+" "+value.lastName)
console.log(namesWhoseAgeLessThan40)    // [ 'Prashant Jha', 'Priyanka Chopra' ]

const sumOfAgeInBio = bio.reduce((acc, current)=>{
    acc=acc+current.age;
    return acc;
}, 0)
console.log(sumOfAgeInBio);             // 125



