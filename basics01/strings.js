// OLDER WAY 

//Concatenation
// console.log('Isra '+ 'Ilyas');
let myName = "ISRA"
let father = "M ILYAS"
// console.log(myName + father + " Qureshi");

/**************/

//MODERN WAY
/*
Use BackTicks
-> String Interpulation

*/
// console.log(`Hello my name is ${myName} and my father's name is ${father}`);

const uni = new String('Fuuast-karachi-pakistan')
// console.log(uni);
// console.log(uni[0]);// (string is object -> Key value pair)

// console.log(uni.__proto__); // did not get it

// console.log(uni.length);
// console.log(uni.toUpperCase());//original string not changed
// console.log(uni.charAt(3));
// console.log(uni.indexOf('u'));
// console.log(uni.indexOf('u'));

const newString = uni.substring(0,8)
console.log(newString);

const anotherString = uni.slice(-14,14)
console.log(anotherString);

const newStringOne = "    Hello"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://isSolutions.com/isra%20ilyas"

console.log(url.replace('%20','-'));

console.log(url.includes('irsa'));
console.log(url.includes('isra'));

console.log(uni.split('-'));

