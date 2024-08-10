let myObject = {
    js: "Javascript",
    cpp: "C++",
    py: "Python"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

let programming = ["Js", "rb", "py", "jaa", "cpp"]

for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}

//  Map 

const map = new Map()
map.set('PK','Pakistan')
map.set('US','United stats')
map.set('In','India')
map.set('PK','Pakistan')

for (const key in map) {
    console.log(key);
    
}