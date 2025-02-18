// why must we use console.log, it is an object that has a lot of methods,
// one of them is log, which is used to print out the output to the console.
// use clg --> console.log

//---------------------------------------

//variables : is a box that can store data
// (reserved keyword) (Variable name) (type of data)
// assign variable
//let name;
// declare variable
//name = "John";
//console.log(name);

// if you use var or let, you can change the value of the variable
// if you use const, you cannot change the value of the variable

//variable challenge

// let name = "Bryan";
// let whatDoYouWannaBecomeInYourLife = "Programmer";
// let gender = "Male";
// let twitterHandle = "@bryan";

//console.log(name); 
//console.log(whatDoYouWannaBecomeInYourLife);
//console.log(gender);
//console.log(twitterHandle);

//---------------------------------------

//primitive data types

// 1. Number
// let num = 10;
// console.log(num);

//increment and decrement

// let num = 10;
// num++; increment by 1
// num--; decrement by 1

// Basic Math Operations

// console.log(5 + 5); //10
// console.log(5 - 5); //0
// console.log(5 * 5); //25
// console.log(5 / 5); //1
// console.log(5 % 5); //0

//---------------------------------------

// Challenge
// Create Variable name (firstFavNum) and store your favorite number
// Create Variable name (secondFavNum) and store your second favorite number

//let firstFavNum = 14;
//let secondFavNum = 3;

//console.log(firstFavNum + secondFavNum);
//console.log(firstFavNum - secondFavNum);
//console.log(firstFavNum * secondFavNum);
//console.log(firstFavNum / secondFavNum);
//console.log(firstFavNum % secondFavNum);
//console.log(firstFavNum ** secondFavNum);

//---------------------------------------

// Boolean -> true // false
//let isTrue = true;

//console.log(isTrue); displays true or false depending on what you set it to. 
// Nan = not a number 
// falsy
//-> false
// -> null
// -> undefined
// -> 0
//-> -0
//-> NaN
//-> '', "", `` (empty quotes)

// let notDefined = undefined;
// null can be set by programers but undefined is set by javascript compiler

//---------------------------------------

// Challenge 

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 14;

// console.log(isJsProgrammingLanguage); this shows true
// console.log(isJsHard); this shows false
// console.log(favNumb); this shows 14
// console.log(favNumb + undefined) this shows NaN

//----------------------------------------

// Comparison Operators

// -> Relational operators
// > Greater than
// < Less than
// >= Greater then or  equal to
// <= Less then or equal to

// -> Equality operators
// === strict equality (type + value)
// !== strict non-equality (type + value)
// == lose equality (value)
// != lose not equality (value)

// console.log(10 === 10); true
// console.log(10 === '10'); false
// console.log(10 !== 10); false
// console.log( 10 !== '10'); true
// console.log( 10 == 10 ); true
// console.log( 10 != '10'); false

//---------------------------------------

// Challenge 

// let firstFavNumb = 14;
// let secondFavNumb = 3;

// console.log(firstFavNumb > secondFavNumb); true
// console.log(firstFavNumb < secondFavNumb); false
// console.log(firstFavNumb >= secondFavNumb); true
// console.log(firstFavNumb <= secondFavNumb); false
// console.log(firstFavNumb === secondFavNumb); false
// console.log(firstFavNumb !== secondFavNumb); true
// console.log(firstFavNumb == secondFavNumb); false
// console.log(firstFavNumb != secondFavNumb); true

//---------------------------------------

// Strings
// let firstName = "Bryan";
// let secondName = "Ochoa"
// concat
// let fullName = firstName + " " + secondName // shows Bryan Ochoa

// 1. Concatenation
// let fullName = firstName.concat(secondName); // Bryan Ochoa

// 2. Append
// firstName += " something else"
// console.log(firstName); === Bryan something else

// 3. Length
// console.log(firstName.length) === 5 for 5 letters in Bryan

// 4. Cases
// .toLowerCase() == makes everything lowercase
// .toUpperCase() == makes everything UpperCase

// 5. Slice
// console.log(firstName.slice(0,1)); == B

//6. Split and Join
// console.log(firstName.split('')); == ['B','r','y','a','n'];
// console.log(firstName.join("")); == bryan

// 7. Includes
// console.log(firstName.includes('B')); == true

//8. Trim
// console.log(firstName.trim()); removes any empty spaces before or after the information in firstName variable.

// let firstName = "Bryan";
// let lastName = "Ochoa";
// let fullName = `${firstName} ${lastName}`
// console.log(fullName) === Bryan Ochoa

//---------------------------------------

// Challenge 

// let favActorFirstName = "Hugh";
// let favActorLastName = "Jackman";
// let fullName = favActorFirstName.concat(favActorLastName);
// let upperCase = fullName.toUpperCase();
// let message = `My favorite Actor is ${upperCase} and say something`;
// message += ' his best show is Silicon Valley';

// console.log(message); // === My favorite Actor is HUGHJACKMAN and say something his best show is Silicon Valley


//---------------------------------------

// Type Conversion
// let money = "50"
// Convert string to Number
// money = parseInt(money)
// money = +money //gives you the same answer just shorter way to write 
// it
// money = Number(money); same answer

// Convert Number to string
// let money = 50;
// money = money.toString();


// Convert string to decimal

// let money = "50.10"
// money = parseFloat(money); shows 50.10 not a string



