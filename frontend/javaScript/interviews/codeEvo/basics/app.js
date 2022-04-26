console.log("Hello world");

// single line comment

/* 
multiline comment
second line
*/

// variables
let age = 20;
console.log(age);

const city = "Pune";

// x const city;
// x const city = "Mumbai"

// All const declarations must be initialized & once initialized you cannot reassign a new value

let sum;
sum = 5;
console.log(sum);

// Data types
// Primitive - 7
// String, Boolean, Number, BigInt, Undefined, Null, Symbol

// Non primitive - Objects

const language = "Javascript";
console.log(typeof language);

const total = 0;
console.log(typeof total);

const isActive = true;
const isLoggedIn = false;
console.log(typeof isActive);

// If a variable is declared but the value is not assigned, then the value of that variable will be undefined.

let result;
console.log(result);

const res = undefined;

// null -> special value that represents empty or unknown value in javascript.
const data = null;
console.log(data);
// It is recommended if you want to explicitly assign a value not known do not use undefined instead use null.

// bigInt -> used to denote an integer value larger than the number data type can hold

// symbol -> value which is unique and unchangable

// Objects - has properties with key value pair
const person = {
  firstName: "Aditya",
  lastName: "Doshi",
  age: 23,
};

// key's can only have string / symbol as a data type, however values can have any datatype

console.log(person);
console.log(person.age);

const nums = [1, 5, 8, 56];
console.log(nums);
console.log(nums[3]);

// Javascript is a dynamically typed language which means we don't have to specify the datatype of a variable when we declare it

let a = 10;

a = "Adi";

a = true; // -> last assigned value
console.log(a);

// Operators -
// used to perform operations on values and variables

// Assignment operators -> arithmetic calculations
let x = 10;
let y = 5;
console.log(x % y); // modulus which gives us the remainder after dividing 10 by 5
// x & y are operands and symbol is operator
console.log(++x); // increments by one
console.log(--y); // decrements by one

// comparison operators -> compare two values and return a boolean val either true or false

console.log(x == y);
console.log(x != y);

// compares not only the value but also the data type (strict check)
console.log(x === y);
console.log(x !== y);

// console.log(x > y, x >= y, x < y, x <= y);

// Logical operators -

const isValidNum = x > 8 && 8 > y;
//  && (ampersand) return true only if both operands evaluate to true if not then false

const isValidNum2 = x > 20 || 8 > y;
// || (pipe) will return true if either of the operands is true or else false

const isValid = true;
// ! not operator which negates the value
console.log(!isValid);

// String operators -
// + operator to join two or more strings

console.log("Tony " + "Stark");
// + operator performs addition when used with numbers & concatenate when used with strings

// ternary operator -based on condition returns
const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);

// Type conversions
// Implicit conversion - type coercion

// if you try to add with a numeric string type the result is a string after concatenatation
console.log(2 + "3");
console.log(true + "3");

// if you use - / * then the numeric string is automatically converted to number
console.log("4" - "2");

// if you try to use non-numeric strings the result is special val called NaN
console.log("tony" - "stark");

// false -> 0, true -> 1, null -> 0
console.log("5" - true);
console.log("5" - null);
console.log(5 + undefined);

// Explicit coversion - manual

// string to numeric / boolean
console.log(Number("5"));
console.log(parseInt("3"));

// floating point number
console.log(parseFloat("3.14"));

// convert other data types to string
console.log(String(200));

// toString will not work on null & undefined
console.log((500).toString());

// convert other data types to boolean
console.log(Boolean(50)); // falsy values -> null undefined 0 '' NaN

// Equality -
// == allows coercion
// === does not coercion
console.log("-------------------");
const var1 = "10";
const var2 = 10;
console.log(var1 == var2);
console.log(var1 === var2);

// Conditional statements
const num = -5;

// The if statement evaluates the condition inside the parenthesis & if the condition evaluates to true it runs the code within that block & if false then else condition runs.
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

const color = "black";
switch (color) {
  case "red":
    console.log("It is red");
    break;

  case "blue":
    console.log("It is blue");
    break;

  case "green":
    console.log("It is green");
    break;

  default:
    console.log("Not valid color");
}

// Looping code -
// For loop -

// Syntax -> for(initializer, condition, final-expression){}
// for (let i = 1; i <= 5; i++) {
//   console.log("Iteration num " + i);
// }

// While loop
// Syntax -> initializer while(condition) { // code final-expression }

// let i = 1;
// while (i <= 5) {
//   console.log("Iteration num " + i);
//   i++;
// }

// Do while -> executes the code block once & then evalutes the condition
let i = 6;
do {
  console.log("Iteration num " + i);
  i++;
} while (i <= 5);

// for..of loop
// syntax -> for(const item of array) { code }

const arr = [1, 2, 3, 4, 5];
// for of loop automatically iterates over the array & in each iteration assigns the value of the array element to num
for (const num of arr) {
  console.log("Iteration num " + num);
}

// Functions

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 6));

function greet(userName) {
  console.log(`Good morning ${userName}`);
}

greet("Tony");
greet("Steve");

const isOddEven = (num) => (num % 2 === 0 ? "Even num" : "Odd num");
console.log(isOddEven(4));

// Scope -
// It basically determines the accessibility or visibility of variables

// Block Scope -> variables declared inside a pair of curly braces cannot be accessed from outside the block

if (true) {
  const myName = "Adi";
}

// console.log(myName);

// let & const variables can only be accessed inside the block they are declared in

// function scope -> variables declared inside the function cannot be accessible from outside the function

function testFunc() {
  const myName = "adii";
}
// console.log(myName)

// Global scope
const myNum = 100;
const myName = "Iron man";

// A globally declared variable will not over ride a block or function scope variable

if (true) {
  console.log(myNum);
}

function testFun() {
  console.log(myNum);
}

testFun();
