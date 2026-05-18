//old way of writing String

const name = "sandesh"
const repoCount = 2

// console.log(name + repoCount + " Value")


//Modern way(Here we use backticks and this way is called String interpolation)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)



//New for of declaring String(creating object of it)
//String is stored in memory in key-value pairs and each character in String has a index

const gameName = new String('Hiteshhc')

//accessing char of String through index
console.log(gameName[0]);


//String is a class so it has different in-built methods present

console.log(gameName.length); // to know the length

console.log(gameName.toUpperCase()) //to convert string in uppercase
//Here the original String is not changing as we have read in stack and heap memory

console.log(gameName.toLowerCase()) //to convert string in lowercase


console.log(gameName.charAt(2))

console.log(gameName.indexOf('h'));


// we can access substring from our main String

const newStr = gameName.substring(0, 4) 
//it will print the character from starting index to the character before last index
console.log(newStr)


// slice -> same as subString but here we can give -ve value also
const anotherStr = gameName.slice(-8, 4)
console.log(anotherStr)


// trim
const newStringOne = "    sandesh    "
console.log(newStringOne)
console.log(newStringOne.trim());  // trim all the whitespaces


//replace
const url = "https://dfsdjfgjs$2bskajd"

console.log(url.replace('$2', '-'));


// includes -> to check if our string has certain elements or not

console.log(gameName.includes('hc'))


// to convert String into array by using Split method

let str = "dbakd-bfkjdbsf-fhbjf"
console.log(str.split('-'))





