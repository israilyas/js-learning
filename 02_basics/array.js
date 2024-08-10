// Array
// () -> paranthesis, {} -> curly braces, [] -> brackets

/*
Array in JS
- resiable
- can containe multible datatypes
- not associative array (array elements can not be accessed using arbitrary strings as indexes , but must be accessed using nonnegative integers as indexes)
- indexing starts from zero

- Array copy Operatin: create shallow copy(shalow copy of object share same reference point means ay change in the copy will also be change in original array)

(Deep Copy -> donot share the same reference)
*/



const myArr1 = new Array(3,5,6,7,8,9,10)

// console.log(myArr);
// console.log(myArr1);
// console.log(myArr1[2]);
// myArr.push(22)
// myArr.pop()
//  unshist and shift are like push and pop 
// myArr.unshift(13) //  add at start
// myArr.shift() //  remove first elemnt

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log( typeof myArr);
// console.log(typeof newArr);

// SLICE, SPLICE

/*
slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it.
*/
const myArr = [ 1, 2, 3, 4, 5, 6, 7,9,10]
console.log("Original",myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("After SLice",myArr);

const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("After SpLice",myArr);
