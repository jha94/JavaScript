let arr = [[1,2,3],[3,2,1]];
// for(let index=0;index<3;index++){
//     arr[index] = [];
// }
// var h=0;
// for(let index=0;index<arr.length;index++){
//     for(let ind=0;ind<arr.length;ind++){
//         arr[index][ind] = h++;
//     }
// }
// for(let index=0;index<arr.length;index++){
//     for(let ind=0;ind<arr.length;ind++){
//         console.log(arr[index][ind]);
//     }
// }
let result = [];
let sum = 0;
for(let index=0;index<arr.length;index++){
    for(let ind=0;ind<arr[index].length;ind++){
        sum = sum+arr[index][ind];
    }
    result[index] = sum;
    sum = 0;
}
// let highest = result[0];
// for(let index=0;index<result.length;index++){
//     if(result[index]>highest){
//         highest=result[index];
//     }
// }

console.log(result)
