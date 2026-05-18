//Dates
//Dates are not like Math as people are working on it we cant directly use it
//we have to create the instance of date object

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);  // it is object


// let myCreatedDate = new Date(2023, 0, 23) // here in js month starts from 0 => jan
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // date & time both
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp); // get the output in milliseconds

// console.log(myCreatedDate.getTime());// get in millisecond but now we can compare b/w 2

// console.log(Math.floor(Date.now()/1000)); //small value easy to compare



let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1); //so we dont get month starting from 0
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getFullYear());


//to customize the locale String
newDate.toLocaleString('default', {
    weekday: "long"
})














