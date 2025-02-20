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

// ------------------------------------->

// Logical Operators
//1. --> Logical AND (&&)
// --> TRUE if both the operands/boolean values are true, else evaluates false

// const a = true;
// const b = false;
// const c = 4;

// console.log(a && b) this will show us false since one is false, if you change b to true that makes both a and b true so it will show true.

// 2. --> Logical OR (||)
//--> TRUE if either the operands/boolean value is true, else it evaluates to false if both are false.

// console.log(a || b); this will show true because one of the two are set to true.

// 3. --> Logical NOT (!)
// --> True if the operands are false and vice-versa

// console.log(!a) this will give us false because it is in front of our true statement so it just changes it to the opposite, if you change the a to b and leave the ! in the front you will see it change the false into true.

// let password = "Bryan"

// if (password.length > 4 && password.includes('an')) {
//     console.log("Valid Password")
// } else {
//     console.log("Invalid Password")
// } this gives us a valid password because both are true

// if (password.length > 8 || password.includes('an')) {
//     console.log("Valid Password")
// } else {
//     console.log("Invalid Password")
// } this gives us a valid password because one of them are true

// ----------------------->

// Arrays -> 0 index based

// Empty array
// const myList = [];

// you can store numbers and strings in arrays.

// How to access items from arrays
//  const string = ['Eat', 'Sleep', 'Code']
//  console.log(string[0]) this shows Eat because eat is in the 0 index.

// Nested arrays

// const nestArr = ['One', ["two", 'three'], 1, true];
// console.log(nestArr[1][1]) will show three because its the 1 index of the nested array

// const myLetter = ['B', 'r', 'y', 'a', 'n'];
// console.log(myLetters)

//Challenge

// const favSingers = ['Drake', 'Cole', 'Carin'];
// console.log(favSingers[0]);
// Drake

// const favNumbers = [3, 14, 30, 7]
// console.log(favNumbers);
// (4) [3, 14, 30, 7]

// const mixedArr = ["Hello", ["Bryan"], 30, false];
// console.log(mixedArr[0])
// console.log(mixedArr[1][0])
// console.log(mixedArr[2])
// console.log(mixedArr[3])
// Hello
// Bryan
// 30
// false

// Basic Array Methods

// concat() --> joins two or more arrays and returns result
// includes() --> checks if any array contains a specified element
// push() --> adds a new element to the end of an array and returns the new length of an array
// unshift() --> adds a new element to the beginning of an array and returns the new length of the array
// pop() --> removes the last element of an array and returns the removed element
// shift() --> removes the first element of an array and returns the removed element
// sort() --> sorts the elements alphabetically in strings and in ascending order
// slice() --> selects the part of an array and returns the new array
// splice() --> removes or replaces existing elements and/or adds new elements

//examples

// const fruit = [
//     'apples',
//     'banana',
//     'mango',
//     'strawberry',
//     'pineapple'
// ];

// fruits.push('grape'); adds 'pushes' grapes to the end of array
// fruits.pop(); remove the last item from array
// fruits.shift(); removes apples, removes first item from array
// fruits.unshift('orange'); adds orange to the front of the Array.

// const fruits = ['apples', 'bananas'];
// const newFruits = ["mango", 'pineapple'];
// const totalFruits = fruits.concat(newFruits);

// console.log(totalFruits); gives you both arrays in one

// const pl = ['Javascript', 'Golang', 'Python', 'PHP'];
// const numbers = [1, 2, 4, 5, 9];

// console.log(pl,includes('PHP')); will console true because the array does include php
// console.log(pl.join('-')); will console 'Javascript-Golang-Python-PHP'
// console.log(pl.reverse()); will console (4) ['PHP', 'Python', 'Golang', 'Javascript']
// console.log(pl.slice(0, 2)); will console (2) ['Javascript', 'Golang']
// console.log(numbers.sort); will console them assorted correctly

// --> --> --> --> --> --> --> --> --> -->

//OBJECTS  -->{ label: value}

// const person = {
//   firstName: "Bryan",
//   lastName: "Ochoa",
//   age: 29,
//   location: ["Planet", "Earth"],
//   isProgramer: true,
// };

// console.log(person); consoles : {firstName: 'Bryan', lastName: 'Ochoa', age: 29, location: Array(2), isProgramer: true}

// how to access items in our object

// const person = {
//   firstName: "Bryan",
//   lastName: "Ochoa",
//   age: 29,
//   location: ["Planet", "Earth"],
//   isProgramer: true,
// };

// console.log(person.//shows all the things we can look for after the period);
// ex: console.log(person.age) consoles 29

// ex: console.log(person['firstName']) consoles Bryan

// to add values to the object

// person.lastName = 'bryan' // adds to the object list if you didn't have one.

// to delete
// delete person.firstName // consoles object without firstName.

//Challenge

// const car = {
//     type: "",
//     model: "Rav4",
//     color: "blue",
// }

// car.type = "Toyota"
// car.wheels = true;

// console.log(typeof car);
// console.log(car);



