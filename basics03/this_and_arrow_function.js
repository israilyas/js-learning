// +++++++ THIS KEY WORD +++++++
/*
This ->Refer Current context (in a specific scope)
context -> (values or variables in current scope)

===> Current context in node environment is Empty -> {}
===> Current context in browser is Window
Global object in browser is -> Window object
*/


const user = {
    username: "Isra",
    price: 299,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website!`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Isra Ilyas"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "israa"
//     // console.log(this);
//     console.log(this.username); // cannot use this in function (only used in objects)
// }
// chai()

// const chai = function() {
//     let username = "israa"
//     // console.log(this);
//     console.log(this.username); // cannot use this in function (only used in objects)
// }

// chai()

// ++++++++++ ARROW FUNCTION ++++++++++
const chai =()=> {
    let username = "israa"
    console.log(this);
    // console.log(this.username); // cannot use this in function (only used in objects)
}

// chai()

// ++++++ Basic arrow function ++++++

// ++++++ EXPLICIT RETURN ++++++
// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// ++++ IMPLICIT RETURN
// const addTwo = (num1, num2)=> num1 + num2

// const addTwo = (num1, num2)=> (num1 + num2)

// ++++++ IMPORTANT +++++++
// while using () no need of return keyword -> IMPLICIT RETURN  -> used in react
// while using {} there is a need oF return keyword -> EXPLICIT RETURN

// +++ RETURN OBJECT +++

const addTwo = (num1, num2)=> ({
    name: "isra",
    age : "18"
})

console.log(addTwo());
