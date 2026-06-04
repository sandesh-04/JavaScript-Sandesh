const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessege : function(){
        console.log(`${this.username} , welcome to website`);
        //Here this is to refer to current context as we are refering something inside block scope
        //and we dont care what happenning outside ,here context means what thing we are talking avout here
        //it is a variable

        console.log(this);
        
        
    }
}

user.welcomeMessege();  
// Hitesh , welcome to website    //first context
// {
//   username: 'Hitesh',
//   price: 999,
//   welcomeMessege: [Function: welcomeMessege]
// }

user.username = "Sam"
// user.welcomeMessege();      //2nd context
// {
//   username: 'Sam',
//   price: 999,
//   welcomeMessege: [Function: welcomeMessege]
// }


console.log(this);   //{} empty object bcz there is not context in global
//if we will do this in browser we will get (Window) bcz in browser the global obj is window





// function chai(){
//     const user = "Hitesh"
//     console.log(this.user);  //undefined => this context is working only inside the objects it is not working in function
    
// }
// chai()


// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);   //undefined
    
// }
// chai()




//Arrow function declaration
//we cannot use this inside  the arrrow function
const chai = () => {
    let username = "Hitesh"
    console.log(this.username);   //undefined
    
}
chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));


//implicit return => means that it is known that we have to return the value so we dont write it in out code 
// and the whole arrow function statement is written only in a single line

// const addTwo = (num1, num2) => num1 + num2  //dont use curly braces => dont need to write return
// const addTwo = (num1, num2) => (num1 + num2)   //if using the curly braces then we have to write return

//why to use parenthesis => what is we have tp return the object then there is curly braces
const addTwo = (num1, num2) => ({user :"Hitesh"})
console.log(addTwo(3,4));



//using arrow function in loop
// const myArr = [2, 4,5 ,7,43]
// myArr.forEach(() => {})


