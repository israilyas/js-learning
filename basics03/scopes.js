// {} ==> Scope (function or if else)
// {} with object is not scope(that is object declaration)
// Block Scope ==> inside {} ->(block scope value will not be vailable outside the scop)
// Global Scope ==> Outside {} ->(global scope value will be available inside the block scope)

if(true){
    let a =  10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++ NESTED SCOPE ++++++

function one(){
    const username = "Isra";

    function two(){
        const website = "youtube"
        console.log(username);  
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "isra"
    if(username=="isra"){
        const website = "youtube"
        console.log(username + website); // no error
    }
    // console.log(website); // error
    
}
// console.log(username); // error

// Closure ==> Child can access parents  variables in nested functions

// +++++++++++ INTERESTING ++++++++++++++



// We can access this function before or after the initialization
// Basic Function
console.log(addOne(5));
function addOne(num){
    return num + 1
}

// console.log(addOne(5));

// we can only call this function after initialization not before
// function -> expression

console.log(addtwo(5)); // Error -> Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5));

// HOISTING -> How function declare, where to place , what is their execuation context, how JS treat variables,  how final tree made where alll the variables are placed 
