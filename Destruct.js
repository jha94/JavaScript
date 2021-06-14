function Destruct(){
    let name = {
        firstName:'Prashant',
        lastName:'Jha',
    }
    let bio = {
        name:{
            first:'Pras',
            last:'jha'
        }
    }
const array = [1,2,3];
const {firstName, lastName} = name;
const [firstArrElement, secondArrElement, thirdArrElement] = array;
const {name:{first,last}} = bio
console.log(first, last)
console.log(firstArrElement, secondArrElement, thirdArrElement, firstName, lastName);

}
Destruct()