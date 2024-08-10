// DE STRUCTURE (array and object)
const course = {
    courseName: "JS in Hindi",
    price:"999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: Instr} = course

console.log(courseInstructor);
console.log(Instr);

/* API
before -> values in XML STructure
now -> values in JSON

JSON => {
    //object
    }
  */ 

// API    
// {
//     "name":"hitesh",
//     "courseNamee":"Js in Hindi",
//     "price" : "free"
// }  

[
    {},
    {},
    {}
]
