// HoF is a fucntin that takes a function as argument or returns a function

function HoF(child){
    child();
    return function name(){
        console.log('name')
    }
    

}
function child(){
    console.log('Child')
}
let a = HoF(child);
a();