// ++++++++++++++++++ MAP ++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10 )
// const newNums = myNums.map( (num) =>{return num + 10} )

// console.log(newNums);

// +++++ CHAINING +++++

const newNums = myNums
    .map((num) => num * 10)
    .map((num) =>num + 1 )
    .filter( (num) => num >=  40 )
    
    // num will be the value returned from previous method
    
console.log(newNums);    
