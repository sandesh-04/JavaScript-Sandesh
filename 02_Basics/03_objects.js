// objects can be declared either like literal or like constructor

//singleton =? whenever we make with constructor this type is of obj is created
// Object.create -> singleton type creation


//object literals   -> curly braces are objects wher we give our key and value


const mySym = Symbol("Key1") // how to use this symbol in obj

const js_user = {  
    name : "Hitesh",  // name here is of type String automatically can be access by both . and square([]) methods
    "full name" : "Hitesh Chaudhary", // can be only accessed by the [] method not by .

    [mySym] : "myKey1",     //this is how we use symbol inside object

    age : 19,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(js_user.name); 
console.log(js_user["email"]);

console.log(js_user["full name"]);

console.log(js_user[mySym]);  // symbol
console.log(typeof mySym);


//to change value => equal(=) symbol is used
js_user.email = "hitesh@chatgpt@gmail.com"  

//to lock the object
// Object.freeze(js_user)
js_user.email = "hitesh@word.com"  //this value will not be inherited bcz it is freezed

console.log(js_user);



// creating a function for our obj

js_user.greeting = function(){
    console.log("Hello JS user");
    
}

// console.log(js_user.greeting); //undefined

console.log(js_user.greeting());


js_user.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);  // referring to elements in oject using this   
}

console.log(js_user.greeting());
console.log(js_user.greeting2());









