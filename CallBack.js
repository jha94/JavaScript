function first(sec){
    sec()
    console.log('first');
}
function second(){
    console.log('second');
}
first(second)