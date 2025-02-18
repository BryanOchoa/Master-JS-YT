// if === money
// -> buy some stuff
// else !== money
// -> bring some money dude

// if (Condition) {...}
// else if (condition) {...}
// else {...}

// let a = 10;
// let b = 20;

// if (a > b) {
//     console.log("a is greater then b")
// } else if (b > a) {
//     console.log("b is greater than a")
// } else {
//     console.log("a and b are equal")
// }

// Time example

// let time = 10;
// let greetings;

// if(time < 10){
//     greetings = "good morning"
//     console.log(greetings)
// } else if(time < 20){
//     greetings = "good day"
//    console.log(greetings)
// } else {
//     greetings = "good evening"
//     console.log(greetings)
// }

// --------------------

//Challenge

// let password;

// if (password === 8) {
//   console.log("Welcome");
// } else if (password <= 8) {
//   console.log("Password is too short");
// } else if (password >= 8) {
//   console.log("Too long password & password should be 8 characters");
// } else {
//   console.log("Please provide password");
// }

// ----------------------

// Switch Statements

// switch (expression) {
// case x : if this case is true then it will run the code if not go to the next case
// print
// break;
//case y:
// print
// break;
//}

// let x = 0;
// let text;

// switch (x) {
//     case 0:
//         text = 'off'
//         console.log(text)
//         break
//     case 1:
//         text = 'on'
//         console.log(text)
//         break;
//     default:
//         text = "no value found"
//         console.log(text)
// }

// this outputs the first case

// Challenge

// let fruit = "Banana";

// switch (fruit) {
//     case "Banana":
//         console.log("Banana is good")
//         break;
//     case "Orange":
//         console.log("I am not a fan of orange.")
//         break;
//     case "Apple":
//         console.log("How you like them apples?")
//         break;
//     default:
//         console.log("I have never heard of that fruit.")
// }

// will display first clg due to the fruit being set to banana

// ------------------------------------------------------------

// For Loop

// DRY -> DOnt repeat yourself

// console.log("Hello Bryan")
// console.log("Hello Bryan")
// console.log("Hello Bryan")
// console.log("Hello Bryan")
// console.log("Hello Bryan")
// DRYYYYYYYYY

// for (initialExpression; condition; increment or decrementExpression) {}

// for (let i = 0; i <= 5; i++) {
//     console.log('Hello Bryan', i)
// } does the same as the top code but we dont repeat code.

// for(let i = 1; i <= 100; i++){
//     console.log('outer loop', i)
//     // nested loop
//     for (let j = 1; j <= 5; j++)
//         console.log("Inner loop", j)
// }

// rarely ever use nested loop

// Challenge

// for (let i = 0; i <= 1000; i++) {
//   console.log("Bryan", i);
// }

// -------------

// While Loops

// while (condition){
// code block to be executed.
//}

// let i = 1;

// while (i <= 5) {
//   console.log("hello world", i);
//   i++;
// }

// Challenge

// let i = 10;

// while (i <= 100) {
//   console.log("Bryan", i);
//   i++;
// }

// Do while loop

// let i = 1;
// do {
// console.log("Hello")
// i++;
// } while (i <= 5)

// Challenge

// let i = 20;

// do {
//   console.log("Bryan", i);
//   i++;
// } while (i <= 400);

