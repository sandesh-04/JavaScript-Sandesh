// {} => scope comes in if-else and loops such as for & while or when it comes with a function


var c = 300
if(true){            //the work of scope of this if statement is only between line 6 to 9 
    let a = 10       // it it come to line 10 then this is not good   
    const b = 20
    var c = 30
}

// console.log(a);   // a is not defined
// console.log(b);   //b is not defined
console.log(c);      //30  it should not be accessed this is demerit of var
                     // here we should get 300 but we are getting 30 this is why we dont use var


// Block scope => whatever is written inside if is the block scope, whatever the value in global 
// scope is present inside the block scope but the values written inside the block scope should 
// not go outside

// Global scope => whatever written outside that is known as global scope



let x =300

if(true){
    let x = 20
    console.log("Inner(BLOCK SCOPE) value of a is : ", x);
    
}

console.log("Outer(Global scope) value of x is :" , x);

//the scope we use in console is different by right clicking on browser -> inspect console
//and the scope which we use inside ide using node is different

