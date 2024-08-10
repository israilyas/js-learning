// Dates

let  myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // month starts grom zero iin JS
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23,5,6,7)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("09-20-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());// not working

// console.log(Math.floor( (Date.now()/1000)));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    // weekday: "long"
    // dateStyle: "full"
    era:"long"
}));



