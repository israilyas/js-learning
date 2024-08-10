//  For Loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log('5 is a best number');
    }
    // console.log(element);
}

// NESTED LOOP

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    // console.log('');
}

// Array in loop

let myArr = ["flash", "batman", "superman"]

// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// Break and Continue

// for (let i = 1; i <= 20; i++) {
//     if (i==5) {
//         console.log("Dedected 5");
//         break // break the loop and go outside
//     }
    
//     console.log(`Value of i is: ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("Dedected 5");
        continue  // SKip condition one time
    }
    console.log(`Value of i is: ${i}`);
}