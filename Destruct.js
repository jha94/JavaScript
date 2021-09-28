function Destruct(){
    var obj = {
        firstName:'Prashant',
        lastName: 'Jha',
    }

    var arr = [1, 2];
    var bio = {
        name:{
            fName:'test1',
            lName: 'test2'
        }
    }
    const {firstName, lastName} = obj;
    console.log(firstName, lastName);
    const [first, last] = arr;
    console.log(first, last);
    const {name:{fName, lName}} = bio;
    console.log(fName, lName);
}
Destruct();