const newHeros = ["hulk", "spiderman"]

// JS default behavior is prototypal

function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(4));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// fron this we understand that in JS everything is a function
// function is a function and also a object

function createUer(uername, score){
    this.uername = uername
    this.score = score
}

createUer.prototype.increment = function(){
    this.score++
}
// this.score ==>jisney bhi bulaya uska score
createUer.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUer("chai",50)
const tea = new createUer("tea",50)

chai.printMe()
