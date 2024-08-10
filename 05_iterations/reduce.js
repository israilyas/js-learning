// ++++++++++ REDUCE +++++++++++
// reduce method executes a user-supplied "reducer"

const arr = [1,2,3]

const initialValue = 0
const sumWithInitial = arr.reduce( (accumulator,currentValue) => accumulator + currentValue, initialValue)

console.log(sumWithInitial);

