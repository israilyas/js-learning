// Q and bluebird => promise libraries used before ES6 promises

// promises are thenable(chain of then)

/* there are two parts
    1) To Create Promise
    2) To consume Promise

-> Promise reduce call back hell (call back k andar call back => chain)    
*/

// Promise creation
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Hello this is Promise 1');
        resolve()
    }, 1000)
})

// promise consumption
// resolve => .then()
// to connect  resolve and then => call resolve() method in promise creation in settimeout
promiseOne.then(function () {
    console.log('Promise One consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Hello this is Promise 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async Task 2 is resved');
})

// pass data in resolve as a parameter
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Israilyas",
            email: "isra@example.com"
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

// Chaining of then and using catch

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if (!error) {
            resolve({
                username: "myuserName",
                password: "123"
            })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username

}).then(function (username) {
    console.log(username);

}).catch(function (error) {
    console.log(error);

}).finally(() => console.log('Finall promise is either resolved or rejected')
)

// ++++++++++++ AsyncAwait +++++++++++++
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        // let error = false
        if (!error) {
            resolve({
                username: "Javascript",
                password: "123456"
            })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// Practice with API

async function getallusers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}
getallusers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=> console.log(error))

