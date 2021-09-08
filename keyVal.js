// var roll = [1,2,3];
// var name = ['a','b','c'];
// var result = [];
// roll.map((val,index)=>{
//     result[index] = {name:name[index], roll: val}
// })
// console.log(result)


// const b= [
//     {data:10,width:5, color:"yellow"},
//     {data:12,width:5, color:"red"},
// ];
// console.log(b.filter(value=>{
//   return  delete value.color;
// }));

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const words1 = ['limit', 'exuberant'];
const newWords = [];
words.forEach((value)=>{
    if(words1.indexOf(value)==-1){
        newWords.push(value)
    }
})
console.log(newWords);