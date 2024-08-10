//  Object using Constructor -> SIngleTon Object

// const tinderUser = new Object()

const tinderUser = {}

//Adding Values in Object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email:"isra@google.com",
    fullname:{
        userfullName:{
            firstname:"Isra",
            secondName:"Ilyas",
            lastName:"Qureshi"
        }
    }//Nested
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullName);
// console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}
const obj3 = {e:5,f:6}
const obj4 = {g:7,g:8}

// const obj3 = { obj1,obj2 }//donot use 
// console.log(obj3);

// ++++++ ASSIGN  ++++++
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) //assign(target,sourse) -> merge all sources in target 
// target === returntarget (True)
// console.log(obj3);

//+++++++ SPREAD +++++++

// const objAll = {...obj1,...obj2,...obj3,...obj4}
// console.log(objAll);

//  FROM DATABASE -> Array of objects
const users = [
    {
        name:"Isra",
        email:"isra@gmail.com",
        id: "123asdf"
    }
]
// console.log(users[1].email);
// console.log(Object.keys(users[1])); //All Keys of object in Array
// console.log(Object.values(tinderUser)); //All values of object in Array
// console.log(Object.entries(tinderUser)); //All Key values in Array
console.log(tinderUser.hasOwnProperty('isLoggedInn')); //Chaeck property present or not

