const radius = [3, 1, 2, 4];
// const calculateArea = function(radius){
//     const output = [];
//     for(let index=0;index<radius.length;index++){
//         output.push(Math.PI*radius[index]*radius[index])
//     }
//     return output;
// }
// const calculateCircumferense = function(radius){
//     const output = [];
//     for(let index=0;index<radius.length;index++){
//         output.push(2*Math.PI*radius[index])
//     }
//     return output;
// }
// const calculateDiameter = function(radius){
//     const output = [];
//     for(let index=0;index<radius.length;index++){
//         output.push(2*radius[index])
//     }
//     return output;
// }
// console.log(calculateArea(radius))
// console.log(calculateCircumferense(radius))
// console.log(calculateDiameter(radius))

const area = function(radius){
    return Math.PI*radius*radius;
}

const calculate = function(radius, logic){
    const result = [];
    for(let index=0;index<radius.length;index++){
        result.push(logic(radius[index]));
    }
    return result;
}

console.log(calculate(radius, area))