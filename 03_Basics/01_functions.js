// functions => these are the package of code at a place which help us to do a task again and again
// only by calling it

// Ex: what if we have to print a certaing code at different place

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");   
}

//Calling the function
sayMyName()                 //=> sayMyName - is reference to function, () - execute



//adding 2 numbers

function addTwoNumber(num1, num2){   //in function definition the input we take are=>PARAMETER 
    console.log(num1 + num2);        //we dont have to specify the datatype of parameter in JS
    
}

addTwoNumber(3, 4)  // while calling the function the value we provide is => ARGUMENT



function addNum(number1, number2){
    let res = number1 + number2
    return res
    // return number1 + number2
    // console.log("Hitesh");   // not printed bcz after return statement nothing gets executed
    
}

const result = addNum(4,9)
console.log(result);




function loginUserMessege(username){
    return `${username} just logged in`
}

console.log(loginUserMessege("Hitesh"));


//what is we will not pass anuthing => undefined
function loginUserMesseg(username){
    return `${username} just logged in`
}

console.log(loginUserMesseg());   //undefined just logged in





function loginUserMesse(username){
    if(username === undefined) {    //  if(!username) {
        console.log("Please eneter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMesse());





// to get a default value that it can never ne empty or undefined
function loginUserMessege(username = "Sam"){
    return `${username} just logged in`
}

console.log(loginUserMessege());
// console.log(loginUserMessege("Hitesh"));



//take the example of shopping cart here we dont know how many argument we pass
//then we also dont know how many parameter to define in func definition
//here we use the {REST} operator same as spread operator=>{...}
//it will store all the argument passed by user in an array

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100, 200, 300 ,400)); //[ 100, 200, 300, 400 ]




function calculateCartPric(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPric(100, 200, 300 ,400)); //[ 300, 400 ]  - 100, 200 goes to v1,v2




// How to pass object in a function

const user = {
    username : "Hitesh",
    price : "399"
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

handleObject(user)






function handleObj(anyOb){
    console.log(`Username is ${anyOb.username} and price is ${anyOb.price}`)
}

handleObj({
    username : "Sam",
    price : "199"
})





//passing an Array inside the function

const myNewArray = [200, 400, 1000, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));




function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal([200,1000,400,456]));










