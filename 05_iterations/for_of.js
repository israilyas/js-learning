// ["", "", ""] strings in array
// [{}, {}, {}] objects in array

// For Off Loop ====> iteration
let MyArr = [1,2,3,4,5]

for (const num of MyArr) {
    // console.log(num);
}

let greetings = "Hello    World"

for (const greet of greetings) {
    if (greet === " ") {
        continue
    }
    // console.log(greet);
}

// Maps 
/* 
map objects are collection of key-value pair, key in the object ma only occur once; it is unique in map's collection
*/

const map = new Map()
map.set('PK','Pakistan')
map.set('US','United stats')
map.set('In','India')
map.set('PK','Pakistan')


// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const[key, value] of map) {
    // console.log(key, ':-', value);
}

// Object 

let myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

for(let [key, value] of myObject) {
    console.log(key," ",value );
}
