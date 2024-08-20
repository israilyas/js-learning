function setUerName (username){
    this.username = username
    console.log('Called');
    
}

function CreateUser(uername, email, password) {
    // setUerName(uername)// reference not hold
    setUerName.call(this,uername) // give current execution context of this function and ave it in this
    this.email = email
    this.password = password
}

const newUer = new CreateUser("isra","isra@gmail.com","1234qwer")

console.log(newUer);
