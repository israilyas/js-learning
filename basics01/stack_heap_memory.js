/* Two Types of Memory
1) Stack (Primitive)
-> copy of variable
2) Heap (Non-primitive)
-> reference of original value

*/

let myName = "Isra"
let anotherName = myName // Copy of myName not orginal and that why when we chage it the originla (myName) remains same
anotherName = "Pikachu"

console.log(myName);
console.log(anotherName);

let userOne = {
    email:"user@gmail.com",
    upi:"user@bl"
} //Heeap

let userTwo = userOne // Same reference not copy (any change in userTwo will also change userOne)
userTwo.email = "isra@google.com"

console.log(userOne.email);
console.log(userTwo.email);

