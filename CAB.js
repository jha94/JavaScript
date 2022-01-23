// Call, apply and bind all three are used for function
// borrowing

const name = {
    firstName : "Prashant",
    lastName : "Jha",
}
function bioData(age){
    console.log(this.firstName+" "+this.lastName+" "+age);
}
bioData.call(name, 27);
bioData.apply(name, [27]);
const bind = bioData.bind(name, 27);
bind();