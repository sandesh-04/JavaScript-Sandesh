const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // push the entire 2nd array inside first one
// console.log(marvel_heros);

// console.log(marvel_heros[3]); // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][2]); //batman


//concat

const allHero = marvel_heros.concat(dc_heros)  //it return a new array combinig both the arrays
console.log(allHero);                          // [ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]

//we can use spread operator also(...) to join the two arrays
//here we can do it as many we want but in concat or push only 2

const all_new_hero = [...marvel_heros, ...dc_heros]
console.log(all_new_hero);




// array inside array inside array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2) // flat will resolve the array and the depth is given
                                                // inside it that how much depth we have to resolve we can give infinity also
console.log(real_another_array);




console.log(Array.isArray("Hitesh"))  //false

//to convert anything whether its object or String etc we use from
console.log(Array.from("Hitesh"))     // [ 'H', 'i', 't', 'e', 's', 'h' ]


// lets give an object to conver it into array
// it will give empty array in this case because we didnt specify that from where we have to make arr either from key or value

console.log(Array.from({name:"Hitesh"}))  //interesting for interview


//of => returns new array from set of elements

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


 


