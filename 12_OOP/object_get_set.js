const User = {
    _email: "h@hc.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
// underscore == private property defines

// factory function
// const tea = Object.create() by default null 
const tea = Object.create(User) 
console.log(tea.email);
