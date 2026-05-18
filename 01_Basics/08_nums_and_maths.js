const score = 400;
// console.log(score);


//Explicitly defining number
const balance = new Number(100)
// console.log(balance); // here in output the type of var is also printed


//Methods present in Number datatype like we have in String
// console.log(balance.toString().length); //ascoverted to string so we can access length
// console.log(typeof balance); //Object

// console.log(balance.toFixed(2)); // precision = 2, means till 2 decimal places



const otherNum = 123.783468
// console.log(otherNum.toPrecision(4))  // gives the precised value 


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // format the number on U-S Standards

// console.log(hundreds.toLocaleString('en-IN')); // format the number in Indian Standards


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);




//**********************MATHS************************ */


console.log(Math) //an object and it has different methods inbuilt and properties

console.log(Math.abs(-4)); // convert neg val into positive

console.log(Math.round(4.3)); //4
console.log(Math.round(4.7)); //5


console.log(Math.ceil(4.3)); //5(takes the nearest greater val)
console.log(Math.floor(4.7)); //4(takes the nearest lower val)


console.log(Math.sqrt(25)); // 5

console.log(Math.pow(2,3)); // 8


//to find min val in a series of no.
console.log(Math.min(2, 5, 1, 9, 4));

console.log(Math.max(2, 5, 1, 9, 4));


//Math.random -> gives randomly value between 0 And 1

console.log(Math.random());

console.log(Math.random() * 10); // gives b/w 0 to 10

console.log((Math.random() * 10) + 1); // add 1 will help in not getting 0 anytime

console.log(Math.floor(Math.random() * 10) + 1); //will not give decimal


const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //gives value b/w 10 and 20














