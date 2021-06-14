function first(child){
    child();
    console.log('first');
}
function second(){
    console.log('Second');
}
first(second)