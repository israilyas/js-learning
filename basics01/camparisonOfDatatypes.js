// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// DIFFERENT DATA TYPES COMPARISON  
// console.log("2">1)
// console.log("02">1)

// Avoide different data types comparison
console.log(null > 0) // JS convert null sometimes to "zero" and sometimes "NaN"
console.log(null == 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// STRICT COMPARISON (also check datatypes)
console.log("2" === 2)
console.log(2 === 2)
