const score = 400
// console.log(score);

const balance = new Number(2000)
// console.log(balance);
// console.log(balance);
// console.log(balance.toExponential());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.9567
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); //US standard
// console.log(hundreds.toLocaleString('en-INR')); //US standard

// ++++++++++ MATHS +++++++++

// console.log(Math);
// console.log(Math.abs(-10)); // only conert negative alue to positive value (no change in positivevalue)
// console.log(Math.round(4.678));
// console.log(Math.ceil(4.678));
// console.log(Math.floor(4.678));
// console.log(Math.min(4,3,6,8,1));
// console.log(Math.max(4,5,2,6,7,8,9,12));

// console.log(Math.random()); // Random -> value in between 0 and 1
// console.log(Math.round((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1)) + min)
