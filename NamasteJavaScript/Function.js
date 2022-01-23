// var  x = 1;
// a();
// b();
// console.log(x);
// function  a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }
function secureCode(){
    let count = 0;
document.getElementById("clickMe")
.addEventListener("click", function xyz(){
    console.log('Click Me', ++count)
})
}
secureCode();