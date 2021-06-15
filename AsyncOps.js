//JS is synchrounous but it behhaves asynchronously
// thanks to it's runtime environment which makes it, in effect, asynchronous

// To handle any asyn operation in JS we have 3 ways

//1. Callback :-

// we can use callback for asynchrounous operations
// like API calling or file I/O. But callback hell is a nightmare
// for debugging or even to perform a oeration with many nested condition
// it makes the code complex and nasty

// Like:-
// function A('opA', (aResult, err)=>{
//     B('opB', (bResult, err)=>{
//         C('opC', (cResult, err)=>{
//             D('opD', (dResult, err)=>{
//                 and so on......
//             })
//         })
//     })
// })


//2. Promise :- 

// to avoid such dirty code we use Promise.
// Promise returns an object after performing the async operations
// that indicates the eventual completion of that operation.
// It performs the async operation in synchronous way
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// const pro = new Promise((acc, rej)=>{
//     let a = 10;
//     let b = 20;
//     if(a<b){
//         acc('A is less than B')
//     } else{
//         rej('A is greater than B')
//     }
// })
// pro.then((value)=>{
//     console.log(value)
// }).catch(val=>{
//     console.log(val)
// })

//3. Async/Await

// best way is to use async await
// - Results in concise and cleaner code.
// - Error handling is much more straightforward 

async function first(){
    try {
        const data = JSON.parse(await getJSON())
        console.log(data)
      } catch (err) {
        console.log(err)
      }
}