// const userEmail = "h@gmail.com" -> truthy
// const userEmail = ""  -> falsy
const userEmail = []  //-> Truthy

if (userEmail) {
    console.log('Got user email');
}
else{
    console.log('donot have user email');
}
/*
Falsy values:
false, 0, -0, bigInt 0n, "", null, undefined, NaN

false == 0    ===> true
false == ''   ===> true
0 == ''       ===>  true

Truthy Values:
true, "0", "false", " ", [], {}, function()
*/
//++++++ check array is empty or not 
if (userEmail.length === 0) {
    console.log('Array is empty');
}

//++++++ check Object is empty or not 
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log('Object is empty');
    
}