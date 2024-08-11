// ++++++++++ REDUCE +++++++++++
// reduce method executes a user-supplied "reducer"

const arr = [1,2,3]

const initialValue = 0
const sumWithInitial = arr.reduce( (accumulator,currentValue) => accumulator + currentValue, initialValue)

// console.log(sumWithInitial);

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc, currentValue) {
//     console.log(`acc: ${acc} , currenValue: ${currentValue}`);
    
//     return acc + currentValue
// } ,3 )

// console.log(myTotal);

const myTotal = myNums.reduce((acc , currentValue) => acc + currentValue, 2)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const total = shoppingCart.reduce((acc,item) => (acc + item.price),0)

console.log(total);


