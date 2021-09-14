//pass by ref

const nameRef = {
    firstName:'Prashant',
    lastName:'Jha'
}

const naamRef = name;
naam.firstName = 'Tunna';
console.log(naam);
console.log(name)

const nameArrRef = ["Prashant", 'Jha'];
const naamArrRef = nameArr;
naamArr[0] = 'Tunna';
console.log(naamArr, nameArr)

//pass by value

const nameVal = {
    firstName:'Prashant',
    lastName:'Jha'
}

const naamVal = {...nameVal};
naamVal.firstName = 'Tunna';
console.log(naamVal);
console.log(nameVal);

const nameArrVal = ['Prashant','Jha'];
const naamArrVal = [...nameArrVal];
naamArrVal[0] = 'Tunna';
console.log(naamArrVal);
console.log(nameArrVal)