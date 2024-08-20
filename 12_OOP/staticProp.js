class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const isra = new User("isra")

console.log(isra.createId());

class Teacher extends User {

}
