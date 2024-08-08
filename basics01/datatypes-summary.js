//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

/*Two types of datatypes

There are two types of data based on how to place data in memory and how to access it.

1) Primitive DataTypes (Call by Value)
->7 Categories
a) String
b) Number  (both decimal and float alues)
c) Boolean
d) Undefined
e) Symbol
f) BigInt (greater values)
g) Null

2) Non-Primitive or Reference Types
a) Array
b) Objects
c) Functions
*/

const score = 100
const scoreValue = 100.5

const isloggedIn = true
const outsideTemp = null
let useremail;

const id = Symbol("123") //always unique
const anotherid = Symbol("123")
// console.log(id === anotherid)
// console.log(id)
// console.log(anotherid)

const bigNumber = 3456789433566666234555555n
// console.log(typeof bigNumber)

/***********************/

// ARRAY ,OBJECT, FUNCTION => typeof->Object for all

const heros = ["IronMan","SpiderMan","GreenMan"]  //Array
// console.log(typeof heros);


// Object => Key value pair in curly braces
let myObj = {
    nam:"Isra",
    age:22
}
// console.log(typeof myObj);


//  Function

const myFunction = function(){
    console.log('Hello World');
    
}

// console.log(typeof myFunction); //Object 
Function 

/* 
RETURN TYPES OF ALL DATATYPES
String  ==>> string
Number  ==>> number
Boolean  ==>> boolean
Undefined  ==>> undefined
Symbol  ==>> symbol
BigInt  ==>> bigint
Null  ==>> bigint

Array ==>>  object
Object ==>>  object
Function ==>>  function (Object function)

*/
let a = function(){
    console.log('hello world');
    
}
console.log(typeof a);


