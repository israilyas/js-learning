
// FILTER 
// filter takes call back function like forEach but it also return the value
// const newNum = myNums.filter( (num) => num>5 )

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter( (num) => {
//     return num>5
// } )

// const newNum = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Mystery", publish: 1995, edition: 2001 },
    { title: "Book Three", genre: "Historical Fiction", publish: 1988, edition: 2005 },
    { title: "Book Four", genre: "Science Fiction", publish: 2002, edition: 2010 },
    { title: "Book Five", genre: "Historical Fiction", publish: 1976, edition: 1998 },
    { title: "Book Six", genre: "Fantasy", publish: 2003, edition: 2015 },
    { title: "Book Seven", genre: "Adventure", publish: 1999, edition: 2007 },
    { title: "Book Eight", genre: "Thriller", publish: 1983, edition: 1990 },
    { title: "Book Nine", genre: "Fantasy", publish: 2011, edition: 2016 },
    { title: "Book Ten", genre: "Romance", publish: 1992, edition: 2000 }
]

// const userBooks = books.filter( (bk) => bk.genre === "Historical Fiction" )

// const userBooks = books.filter( (bk) => bk.genre === "Fiction" )

// const userBooks = books.filter( (bk) => bk.publish >= 2000)

const userBooks = books.filter((bk) => bk.publish >= 1900 && bk.genre === "Historical Fiction")

// console.log(userBooks);

