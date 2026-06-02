// Destructuuring is done in both arrays and objects:
//but here we talk about the destructuring of objects

const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor)

// const {courseInstructor} = course
// console.log(courseInstructor);


const {courseInstructor: instructor} = course // destructuring the obj
console.log(instructor);


//Destructuring in React
// const navbar = (props.company) => {

// }
// navbar(company = "hitesh")

// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")




// from api we get the response in json format
// { //here we get it in form of object
//     "name":"hitesh", // both instring format
//     "email":"a@gmail.com"
// }

// sometime we get it in the form of the array of obj response from api
// [
//     {},
//     {},
//     {}
// ]


//Random user me api for practice
//json formattor
