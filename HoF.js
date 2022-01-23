

// function frequency(arr){
//     var count = [];
//     var counter = 0;
//     var unique = [];
//     for(var index=0;index<arr.length;index++){
//         if(unique.indexOf(arr[index])===-1){
//             unique.push(arr[index])
//         }
//     }



//     for(var index=0;index<arr.length;index++){
//         for(var ind=0;ind<unique.length;ind++){
//             if(unique[ind]===arr[index]){
//                 counter++;
//             }
//             continue;
//         }
        
//     }
//     console.log(counter);
// }



let frequency = str => {
    return str.reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
console.log(frequency(['a','a','a','b','b']));