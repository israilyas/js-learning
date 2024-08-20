class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const newTeacher = new Teacher('Majeed', 'majeed@gmail.com', '123qwer')

newTeacher.addCourse()
newTeacher.logMe()

const myuser = new User("isra")

// myuser.addCourse()
myuser.logMe()

// console.log(myuser === newTeacher);
console.log(myuser instanceof Teacher);
console.log(newTeacher instanceof Teacher);
console.log(newTeacher instanceof User);
console.log(Teacher instanceof User);// teacher is a class
console.log(myuser instanceof User);
