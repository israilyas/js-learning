let score = "33";
let score2 = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) //number

let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2)
// console.log(valueInNumber2)  // NaN (not a nuumber)

let score3 =null;
let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3)
// console.log(valueInNumber3) // converted to zero

let score4 = undefined;
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4) 
// console.log(valueInNumber4) // NaN

let score5 = true;
let valueInNumber5 = Number(score5)
// console.log(typeof valueInNumber5)
// console.log(valueInNumber5) // 1 (true) and 0 (false )

let score6 = "hello";
let valueInNumber6 = Number(score6)
// console.log(typeof valueInNumber6)
// console.log(valueInNumber6) //Nan 

/*
Notes :
"33" => 33 type->number
"33abc"=> NaN type-> number
true => 1 , false => 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn)
/* notes:
1 => true , 0 => False
"" => false
"value" => true
*/

let someNumber = 55

let stringNumber = String(someNumber)
console.log(typeof stringNumber)