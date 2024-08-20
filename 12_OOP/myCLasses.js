// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("isra","isra@gmail.com","123")

// console.log(newUser.encryptPassword());
// console.log(newUser.changeUername());

// BEHIND THE SCENE

function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUername = function () {
    return `${this.username.toUpperCase()}`
}

const chai = new User("chai","achi@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUername());
