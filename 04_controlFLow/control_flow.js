// const temp = 45;

// if(temp<=50){
//     console.log(`Tempertaure is less than 50 and value of temp: ${temp}`);
// }
// else{
//     console.log(`Tempertaure is greater than 50 and value of temp: ${temp}`);
// }

// logical operators ==> (<, >, <=,>=,!=)

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);// out of scope
// var is almost global scope variable
// let and const are scope variable

//+++++++++  SHORT HAND NOTATION ++++++++++

//IMPLICIT SCOPE (execut in one line)
// const balance = 1000

// if(balance>500)console.log('test');
// if(balance>500) console.log('test'),console.log('test2');  Unreadable  Code (do not use multible command or console)

// ++++++++++ NESTED ++++++++++++
// const balance = 1000

// if(balance<500){
//     console.log('less than 500');
// }
// else if(balance<750){
//     console.log('less than 750');
// }
// else{
//     console.log('less than 1200');
// }

//============

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log('Allow to buy courses');
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log('User logged in');
}