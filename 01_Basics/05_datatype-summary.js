// Primitive -- here we get the copy of our value from memory
//(Call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a dynamically typed language

const score = 100 // as number
const scoreValue = 100.3 // as number
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3241237142571254n; // as BigInt

// Reference(Non - Primitive) -- Here we get the value from memory by reference
//(Call by reference)
// Array, Objects, Functions



//Declaring Arrays:
const heros = ["assd", "adasd", "dasdfsdf"]


//Declaring object(key- value pairs where name and age are objects)
let myObj = {
    name: "sandesh",
    age: 22,
}

//Declaring Functions:
const myFunction = function(){
    console.log("Hello World");
}


//How to find datatype -> typeof

console.log(typeof bigNumber)  //bigInt
console.log(typeof outsideTemp) //object
console.log(typeof scoreValue); //number
console.log(typeof anotherId) //symbol

console.log(typeof heros) //object
console.log(typeof myFunction) //function
console.log(typeof myObj) //object
