function Hoisting(){
    console.log(a);     // 10
    getName();          // Prashant
    console.log(x);     //Cannot access 'x' before initialization
    let x = 10;
    var a = 10;
    function getName(){
        console.log("Prashant");
    }

}
Hoisting()