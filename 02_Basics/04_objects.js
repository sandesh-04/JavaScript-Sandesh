// const tinderUser = new Object()  //singleton obj
const tinderUser = {}           //non - singleton obj

tinderUser.id = "1213dsfsd"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// Object inside object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Hitesh",
            lastname : "Chaoudhary"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

//here to access something inside the object we use {?} just to check if the element 
//is present inside the object or not and also to avoid the use of if-else statement 



// combining and merging the objects together

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // it will not merge both it just put both in same object

// const obj3 = Object.assign(obj1, obj2)


//using spread operator which spread all the element in a new object
const obj3 = {...obj1, ...obj2}

console.log(obj3);



//array of objects:
const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

console.log(user[1].email)


console.log(tinderUser);

//accessing the keys in tinderuser => we will get it in an array
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// to check if something is present in the object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));




