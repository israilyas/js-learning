// // promise is an object representing eventual completion

// fetch return promice


//  Promise Creation
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // database calls,cryptography,network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },3000)
})

// Promise Consumption
//.then => resolve
promiseOne.then(function(){
    console.log("Promise consumed");

})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynctask 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 Resolved");

})

// Pass data in resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({
        username:"israilyas",
        email:"israiilyasq@gmail.com"
    })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    console.log(user.username);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username:"Isra Ilyas",
                password:"1223uyrs"
            })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

const userName = promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username);

})
.catch(function(err){
    console.log(err); 
})
.finally(()=> console.log("The promise is either resolve or rejected"))

console.log(userName);


//+++++++++++ ASYNC AWAIT +++++++++++++
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: "Javascript",
                password: "1223uyrs"
            })
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function cunsumePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

cunsumePromise()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()// it takes time to convert in js 
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }

// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>console.log(data))
.catch((error)=> console.log(error))