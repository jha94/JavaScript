let arr = [1,2,3];
console.log(arr);
arr.unshift();
console.log(arr);
//pop() :- delete last element of array
arr.pop();
console.log(arr);

//push() :- insert element at last index of array
arr.push(1);
console.log(arr);

//shift() :- delete first element of array
arr.shift();
console.log(arr);

//unshift() :- get element from last index but don't delete it
console.log(arr.unshift());
console.log(arr);

//map():- to perform operation on each element of array
let doubledArr = arr.map(value=>value*2);
console.log(doubledArr);

//reduce() :- 
let reducedArr = arr.reduce((fValue, lValue)=>fValue+lValue);
console.log(reducedArr);

//filter() :- to filter out results from array
let filteredArr = arr.filter(value=>value>1);
console.log(filteredArr);
