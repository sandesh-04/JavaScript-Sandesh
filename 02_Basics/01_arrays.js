const myArr = [0,1,2,3,4,5,true,"Hitesh"]
// console.log(myArr);

//Array are objects.
//Array are resizable and contain a mix of different data types in JS
//Array in JS havs 0 based indexing

// Array-copy-operations creates shallow copies
//Shallow copy -> of an object is a copy whose properties share the same reference(means whatever we change is displayed in or changes in original array also)
//Deep copy -> of an object is a copy whose properties do not share the same reference

// const myHero = ["Batman", "Spiderman"]

// const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]); //to access elements based on their index



//Array Methods:

myArr.push(6)           // add new element in the last of array
myArr.push(7)

myArr.pop()             // remove the last element from array
console.log(myArr);



myArr.unshift(9)        // add the element in the starting of an array
console.log(myArr);


myArr.shift()           // remove an element from starting of an array
console.log(myArr);



console.log(myArr.includes(4));   //true

console.log(myArr.indexOf(5));    //5



const newArr = myArr.join()        // it binds and it covert the array into string
console.log(myArr);

console.log(newArr);
console.log(typeof newArr);        // string



//slice & splice

console.log("A " , myArr)

const newArr2 = myArr.slice(1, 3)  //return a copy of section of array here from 1 to 2 index
                                //leaving last number

console.log(newArr2)
console.log("B " , myArr)



const newArr3 = myArr.splice(1, 3) //splice include the last range

console.log("C ", myArr);       //C  [ 0, 4, 5, true, 'Hitesh', 6 ] ->here the portion of splice is removed from 
                                // original array and our whole array is manipulated

console.log(newArr3)












