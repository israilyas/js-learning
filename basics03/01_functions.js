

// function funName(){
//     //function scope or definition
// }

// function sayMyName(){
//         console.log("I");
//         console.log("S");
//         console.log("R");
//         console.log("A");
// }
// //sayMyName -> function reference
// sayMyName() //execution

// Parameters ->Input Used in function definition
// Argumments ->Values Passed in function execution
// function addTwoNumbbbers(num1,num2){
//     console.log(num1 + num2);
// }

// addTwoNumbbbers(6,2) //argument
// // addTwoNumbbbers(6,"2")
// // addTwoNumbbbers(6,null)

// const result = addTwoNumbbbers(6,2)
// console.log("Result:",result);

function addTwoNumbbbers(num1,num2){
    let result = num1+ num2
    // console.log('hello');
    return result
    // console.log('hello');
}
//after return the lines of codde in function not execute
const result = addTwoNumbbbers(6,2)
// console.log("Result:",result);

// function loginUserMessage(username = "sam") defasult value

function loginUserMessage(username){
    if(!username || username===""){
        console.log('Please enter a username!');
        
    }
    else{
        return  `${username} just logged in`
    }
}

const userlogin = loginUserMessage("Isra")
console.log(userlogin);
console.log(loginUserMessage(''));

