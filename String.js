

// important String operations

let string = "A quick brown fox jumps upon over the lazy dog.";

// includes is a case sensitive operation to search
// whether a given string is present on other or not
console.log(string.includes('fox'));                // true
console.log(string.includes('Fox'));                // false

// indexOf is also case sensitive operation to 
// find the index of a string in another one
console.log(string.indexOf('fox'));                 // 14
console.log(string.indexOf('Fox'));                 // -1

// split divides the string according to regular expression
// and returns a array
console.log(string.split(" "));    // ['A','quick','brown','fox','jumps','upon','over', 'the','lazy','dog.']

// to cancat a string in another one
console.log(string.concat('hi'));                  // A quick brown fox jumps upon over the lazy dog.hi

// to get the length of a given string
console.log(string.length);                       // 47

// to find the character a given index
console.log(string.charAt(4));                   // i

// to replace a string with another string
console.log(string.replace('fox','deer'));      // A quick brown deer jumps upon over the lazy dog.








