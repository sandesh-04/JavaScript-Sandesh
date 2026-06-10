//if statement:

//here comparison operators are used: >, <, >=, <=, ==, !=, ===(for type comparison)

const isuserLoggerIn = true
if(isuserLoggerIn){
    console.log("Executing");   
}

if(2 != 3){
    console.log("True");   
}

if(2=="2"){
    console.log("Executed");  
}

if(2==="2"){
    console.log("Exe");     //do not get printed   
}


//if - else


const temp = 30
if(temp > 40){
    console.log("Its very hot");
    
}else{
    console.log("Temp is normal");
    
}
console.log("Execute");


// boundation of scope:

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
    
}
//console.log(`User power: ${power}`); //power is not defined as power can not be accessed
//out of that scope unless we have used {var} keyword in power



//short hand notation

const balance = 1000

//if(balance > 500) console.log("test");  //here implicit scope is there

//if -else if -else

if(balance < 500){
    console.log("less than 500");
    
}else if(balance < 750){
    console.log("less than 750");
    
}else if(balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}



// &&  ||

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}
