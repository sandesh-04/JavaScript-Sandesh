//nested scope:

function one(){
    const username = "Hitesh"

    function two(){               //username is global scope for this block scope so it can get accessed
        const website = "youtube"

        console.log(username);   //here it can access this bcz child function can access the parent function properties
        
    }
    //console.log(website);        //block scope cannot be accessed in global scope
    

    two()
}

one()


//CLOSURE => this is somewhat called as closure that the inside function can access the variable of uotside function
//whereas outer cannot




//same thing can be done with if-else

if(true){
    const user = "Hitesh"
    if(user === "Hitesh"){
        const web = " Youtube"
        console.log(user + web);
        
    }
    // console.log(website);
    
}
// console.log(user);





//************************INTERESTING************************************************************* */



console.log(addOne(5))   //will run not give error

function addOne(num){    //this is a type we are familiar with to create functions in js
    return num+1
}

//addOne(5)



//another type to create the function


// console.log(addTwo(5))   // Error bcz it will depend on how we are declaring the function concept of hoisting

const addTwo = function(num){      //this is sometime called as expression
    return num + 2                 // here in JS the variables are very strong they can hold anything                                  
}                                  //such as functions, json values

//addTwo(5)



//hoisting => how the function and variables are treated in js