// Calculating Cart Price

//...num == Rest Operator +. for passing multiple values in function
function calculateCartPrice(val1,val2,...num1){
    returnnum1
}

// console.log(calculateCartPrice(200,300,266));

// Passing Objects In Function
const user = {
    userName: "hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName:"Sam",
    price:2345
})

// Passing Objects In Function

const myArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));
