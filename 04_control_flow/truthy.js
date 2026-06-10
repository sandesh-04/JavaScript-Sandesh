//here we assume some values in JS as Truthy and Falsy values


//Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}

const userEmail = []

if(userEmail){
    console.log("Got user-email");
    
}else{
    console.log("Don't have user-email");
    
}


if(userEmail.length === 0){
    console.log("Array is empty");
}

//to check if a object is empty or not:

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}


// true => false == 0, false == '', 0 == ''



//nullish coalescing operator(??): null undefined 

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);
