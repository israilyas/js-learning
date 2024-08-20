// ++++++++ Object == object literal == basic unit

// const user  = {
//     username :  "Isra",
//     loginCount: 8,
//     signedIn:true,
//     getUserDetails:function () {
//         // console.log('got user details from database');
//         console.log(this.username);
//         console.log(this);
//     }
// }
// console.log(this);
// console.log(user.username);
// console.log(user.getUserDetails());

//++++++++ constructor function ++++++++
/* new Keywords ==> constructor function
contructor function  allow to create multiple intances from single object literal

===> contructor property is the reference to itself

1 => new keyword first create an empty object which i called intance(object) ==> {}

2 => a constructor function is  called due to new keyword  

3 => all the argument will be injected in this keyword

4 => you will get all argument in function
*/

// const promiseOne = new Promise()
// const date = new Date()

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}
// const userOne =user("israilya",12,true)
// const userTwo =user("sara",20,false)

const userOne =new user("israilya",12,true)
const userTwo =new user("sara",20,false)

console.log(userOne);
console.log(userTwo);
console.log(userTwo.contructor);
