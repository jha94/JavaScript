// Call, apply and bind all three are used for function
//borrowing

const name = {
    firstName:'Prashant',
    lastName:'Jha'
}

function printName(age){
console.log(this.firstName+" "+this.lastName+" "+age)
}

printName.call(name, 27);
printName.apply(name, [27])
const bind = printName.bind(name, 27);
bind();