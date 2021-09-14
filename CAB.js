// Call, apply and bind all three are used for function
//borrowing

let printName = function(){
    console.log('My name is'+this.firstName+' '+this.lastName)
}
const name = {
    firstName:'Prashant',
    lastName:'Jha'
}
// Call :- used to invoke a fucntion directly
// by passing a reference which points to this variable
//inside that fucntion
printName.call(name);

//apply :- same as call but in apply we have to pass
//extra parmas in array
// printName.apply(name,[27, 'Bihar'])

// bind :- same as call but doesn't directly invokes the method
//but gives us copy of exactly same method that can be used later

// const binded = printName.bind(name, 27, 'Bihar');
// binded()