// * Day 1: Variable and Data Types with Answer

// activity 1:
var myVar = 64;
let myLet = 46;

// console.log(`myVar is ${myVar} \n myLet is ${myLet}`);

// activity 2 and 3:
const myConst1 = true;
const myConst2 = false;

// console.log(`This is myConst: ${myConst1}${myConst2}`);

// activity 4:
let myNumber = 64;
let myString = "wow";
let myBool = true;
let myObj = { name: myString };
let myArray = [myBool, myNumber, myObj];

// console.table(myArray);
// console.log("This is myArray \n", myArray, typeof myArray);

// activity 5:
let myValue = 56;
// console.log(myValue);

myValue = 57;
// console.log(myValue);

// activity 6:
const Error = "don't make same variable name";
// console.log(Error);

// Error = "iam a error"; TypeError: Assignment to constant variable.
// console.log(Error); //

// Feature Request 1 and 2:

let num = 56;
let str = "hello";
let bool = true;
let obj = { age: 100 };
let arr = [num, str, bool, obj];

/*
console.log("number is :", num);
console.log("typeof is :", typeof num);

console.log("string is :", str);
console.log("typeof is :", typeof str);

console.log("bool is :", bool);
console.log("typeof is :", typeof bool);

console.log("object is :", obj);
console.log("typeof is :", typeof obj);

console.table(arr);
console.log("typeof is :", typeof arr);

*/

//* 2 : Reassignment Demo:

let name = "sam";
console.log(name);
name = "sam03";
console.log(name); // we can't get error in let
const naam = "jerry";
console.log(naam);
// naam = "orange";
// console.log(naam); // TypeError: Assignment to constant variable.

