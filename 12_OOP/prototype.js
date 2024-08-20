let myName = "Isra     "

// console.log(myName.length);
// +++ we have to make a method truelenth that should be present in all tring 
// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHero = ["thor", "spiderman"]

let heroPower  = {
    thor: "hammer",
    spiderman: "sling",

    getpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.isra = function(){
    console.log('Isra is present in all objects');
    
}

Array.prototype.heyisra = function(){
    console.log('Isra says hello');
    
}

// heroPower.isra()
// myHero.isra()
// myHero.heyisra() // only array have heyira() method
// heroPower.heyisra()

// ++++++ INHERITANCE ++++++++

const User = {
    name : "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const taSupport = {
    makeAssignment:'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User // Outdated

// prototypal inheritance = > how you can acces someone else propert

// Modern Approach
Object.setPrototypeOf(teachingSupport,teacher)
    
//(object,object of which you want to access properties)

//++++++++++++++++++++

let anotherUserName = "chaiAurCode   "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"israilyas".trueLength()
"qureshi".trueLength()
