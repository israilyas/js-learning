// array.forEach(element => {
    
// });

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){
// console.log(item);
// } )

// call back function have no name

// For each with arrow function
// coding.forEach( (val) => {
// console.log(val);
// } )

// For each with pre-build function
function printMe(item) {
    // console.log(item);
}
// coding.forEach( printMe ) // give only reference of function -> donot execute function using ()

// Print ITEM, INDEX, ARRAY IN FOR EACH
coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding = [
    {
    languageName: "javascript",
    languageFile: "js"
},
    {
    languageName: "java",
    languageFile: "java"
},
    {
    languageName: "python",
    languageFile: "py"
}
]

myCoding.forEach( (item) => {
    console.log(item.languageName ,' ',item.languageFile);
    
} )