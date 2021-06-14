//Pass by ref

// let name = {
//     firstName:'Prashant',
//     lastName: 'Jha'
// }

// let name2 = name;
// name2.firstName = 'Pras';
// console.log(name);
// console.log(name2)

// const nameArr = ['Prashant', 'Jha'];
// const nameArr2 = nameArr;
// nameArr2[0] = 'Pras';
// console.log(nameArr);
// console.log(nameArr2);


//Pass by value

let name = {
    firstName:'Prashant',
    lastName: 'Jha'
}

let name2 = {...name};
name2.firstName = 'Pras';
console.log(name);
console.log(name2)

const nameArr = ['Prashant', 'Jha'];
const nameArr2 = [...nameArr];
nameArr2[0] = 'Pras';
console.log(nameArr);
console.log(nameArr2);