class User {
    constructor (email, password){
        this.email = email
        this.password = password
    }

    get email(){
        // always return some value
        return this._email.toUpperCase()
    }
    set email(value){
        // setters ko return nhi krtey
        this._email = value
    }
    
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}isra`
    }

    set password(value){
        return this._password = value
    }
}

const isra = new User("isra@gmail.com","123asd")
console.log(isra.password);
console.log(isra.email);
