//Immediately invoked function expressions(IIFE)

//for immediately execution and to prevent the function from polluting throught global scope 
//as they can access some properties from the global scope

// function chai(){
//     console.log("DB connected");
    
// }
// chai()   //here function immedietly invoked or executed

(function chai(){                   //here function name is chai => named iife
    console.log("DB connected");
})();    // ; to stop the execution other wise next functionns will not get executes

//()() => first parenthesis - for function definition, 2nd for - execution
//iife => for immediate execution and to prevent the function from pollution of global scope


// (() => {                            // no function name => unnammed iife
//     console.log("DB connected two");
    
// })();


((name) => {
    console.log("DB connected two", name);
    
})("Hitesh");




