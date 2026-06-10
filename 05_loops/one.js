//for

for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element == 5){
        //console.log("5 is the best number");
    }

   // console.log(element);   
}


//nested for loop

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop value ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);       
    }   
}



// applying loop on array:

let myArr = ["flash", "batman", "superman"]
//console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}



//break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break;       // breaks the flow and comes out of the loop after break
//     }
//     console.log(`Value of i is ${i}`);   
// }





for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;        // skip the element
    }
    console.log(`Value of i is ${i}`);   
}





