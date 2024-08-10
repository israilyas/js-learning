// singleton (when object created from constructor)

// constructor method
// Object.create

// Object Literals
// by default key is string

const mySym = Symbol("key1")


const jsUser = {
    name : "Isra",
    "full name":"Isra Ilyas",
    age: 18,
    [mySym]:"myKey1",
    location:"Karachi",
    email:"isra@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// Mostly we access the value by using dot but in rare case we use [] -> for symbol and [""]  -> for string
// console.log(jsUser.name);
// console.log(jsUser["name"] );
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); //Correct syntax for accessing and using symbol in Object

//Update Value in Object

jsUser.email = "isra@google.com"
// Object.freeze(jsUser) // free Object so no one can change it
jsUser.email = "isra@chatgpt.com"

console.log(jsUser);

// Funtion in Object

jsUser.greetings =function(){
    console.log("Hello JS User");
}
jsUser.greetings2 =function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}
//This is used to reference element of same object (show all the properties of same object)
console.log(jsUser.greetings);
console.log(jsUser.greetings());
console.log(jsUser.greetings2());

