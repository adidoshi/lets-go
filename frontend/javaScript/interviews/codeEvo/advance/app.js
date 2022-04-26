// scope

// Block scope: variables declared inside a pair of curly braces cannot be accessed from outside the block.

// Function scope: variables declared inside a function cannot be accessed from outside the function

// Global scope:
// declared at top of a block or func, globally scoped variables can be accessed inside a block or function

// --------------------------------------------------

// Nested functions scope -
let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

// explanation -
/*
How this will work from javascript engine point of view
Js will have to look up for values of a, b, c - it will check if c is defined in the inner function scope (it is) - it looks for b, (not available in the inner func scope), now it checks one level up in the outer function scope, is the variable b present there (it is) - for a it checks for outer func scope, inner (doesn't find) then it checks one more level up & reaches the global scope (finds it)
This is an example of lexical scoping which describes how JS resolves variable names when func are nested.
*/

// ----------------------------------------

// Closures -
// A closure is the combination of a function bundled together with refrences to its surrounding state. Closures are created every time a function is created, at function creation time.

function outer2() {
  let counter = 0;
  function inner2() {
    counter++;
    console.log(counter);
  }
  //   inner2();
  return inner2;
}
// outer2();
// outer2();
const fn = outer2();
fn(); // 1
fn(); // 2

// With every new invokation of function a temporary memory is established & we have a new counter variable initialized to 0 then incremented, hence every outer function call will always print 1

// Closure -
// In JS, when we return a function from another func, we are effectively returning a combination of the function defination along with the function's scope. This would let the function defination have an associated persistent memory which could hold on to live data between executions. That combination of the func & its scope chain is what is called a closure in JS.

// key point -> In closures an inner function has access to variables in outer function scope even though the outer function has finished executing

// ---------------------------

// Function currying -
// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

// function f(a, b, c) is transformed to f(a)(b)(c)
// It doesn't call a function it simply transforms it

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(5, 2, 3));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);

// compose reusable function

// --------------------------------

// this keyword -
// The javascript this keyword which is used in a function, refers to the object it belongs to. It makes functions reusable by letting you decide the object value. this values is determined entirely by how a function is called

// function printMyName(name) {
//   console.log(`My name is ${name}`);
// }

// printMyName("Adi");

// You can determine the value of this keyword by how a func is called

/* 
How to determine `this`?
Implicit binding
Explicit binding
New binding
Default binding
*/

const person = {
  name: "Aditya",
  printMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

// Implicit binding

// to invoke the function -
// we now know how the function is called which means we now have what we want to determine the this keyword inside the printMyName func
person.printMyName();

// The implicit binding rule states that when a func is invoked by a dot notation the object which is towards the left of the dot is what this keyword is referencing. Js will now refer this.name as person.name which is equal to the string 'Aditya'.

globalThis.name = "Superman";
// Explicit binding
// Here the function is seperated from the person object
function printMyName() {
  console.log(`My name is ${this.name}`);
}
// In this scenario we have to explicitly set the context when the func is called to do so we can use the call method (in js every func has a built in method named call which allows you to specify context with which a func is invoked)

printMyName.call(person);

// New binding -
// In js we can invoke a func with a new keyword & in such a scenario the func is invoked with this keyword referencing an empty object

// contructive func as we can create multiple persons from this func
function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("adidoshi");
const p2 = new Person("ironMan");

console.log(p1.name, p2.name);

// When we invoke a func with - new keyword, javascript under the hood will create a new empty object that this keyword will reference
// We are not creating the empty object, the new keyword internally does this when func Person is invoke with the new keyword.

// Whenever we invoke a func with a new keyword within the func this keyword will always reference to a new empty object

// Default binding - fallback binding if none of the other three rules are matched
// This keyword will rely on the global scope, with this keyword you can introduce a dynamic value within the same func
printMyName();

// Order of precedence

/* 
 New binding -
Explicit binding -
Implicit binding -
Default binding -
*/

// call Apply Bind
// call method -> function borrowing
let name = {
  firstName: "Aditya",
  lastName: "Doshi",
};
let printFullName = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
};
// This first argument will always be the reference to the this keyword, & the later arguments can be the args to the function
printFullName.call(name, "Pune", "Maha");
let name2 = { firstName: "Roc8", lastName: "OP" };
printFullName.call(name2, "Bangalore", "Karnataka");

// apply method ->
// So the basic difference is the way we pass arguments while calling the function, here also first arg refers to the this keyword & the second arg is the list we need to pass as args to the func
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// bind method - To bind & keep a copy of that method to use it later.
const printMyName0 = printFullName.bind(name2, "Bangalore", "Karnataka");
printMyName0();

// ----------------------------------

// Polyfill for bind -
let newName = {
  firstName: "polyfill",
  lastName: "bind",
};

let printNewName = function (homeTown, state) {
  console.log(`${this.firstName} ${this.lastName} ${homeTown} ${state}`);
};

let displayNewName = printNewName.bind(newName, "Katraj");
displayNewName("Mah");

// if we keep any method in Function.prototype then each & every method we write has access to that method
Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let displayNewName2 = printNewName.mybind(newName, "Pune");
displayNewName2("Maha");

// Prototype -
function Person0(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

// Instances of this function Person1 with new keyword

// A function that is used with the new keyword is called a constructor function

const person1 = new Person0("Bruce", "Wayne");
const person2 = new Person0("Clark", "kent");

// Js is a dynamic language so it allows us to attach new properties to an object at any given time.

// person1.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

Person0.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// We have defined the getFullName func once but it is available on every instance of the Person0 func

// In js every func has a property prototype that points to an object, we can make use of that protoype obj to determine all are sharable properties

console.log(person1.getFullName());
console.log(person2.getFullName());

// Once use of prototype is to share properties & methods across instances the other use which is pretty significant as well is inheritance

// -----------------------------

// Prototypal inheritance
function SuperHero(fName, lName) {
  // this = {}
  Person0.call(this, fName, lName);
  // fName, lName get assigned & firstName & lastName properties are inherited by superheros
  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime");
};
SuperHero.prototype = Object.create(Person0.prototype);

// creating instance of SuperHero func
// batman SuperHero has inherited (properties & methods) getFullName from Person0
const batman = new SuperHero("Bruce", "Wayne");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());

// instead of duplicating the code we can inherit the Person -firstName * lastName properties

// ---------------------------------

// class
// The class syntax does not introduce a new object oriented inheritance model
// In javascript classes are a syntactical sugar over the existing prototypal inheritance
console.log("--------------------");

// create a class
class Person5 {
  // initialize properties
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  //   add methods
  printMyName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// so we can create an instance & access properties, methods like before [nothing changes]
// create instance of the class
const classP1 = new Person5("Steve", "Rogers");
console.log(classP1.printMyName());

// class keyword makes the code syntax better for which we already had in place

// let's rewrite class SuperHero which inherits Person5 (with extends & super keywords)
class SuperHero2 extends Person5 {
  constructor(fName, lName) {
    super(fName, lName);
    // once we call super we set the properties & methods inside the class
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log(`Fighting crime`);
  }
}

const ironMan = new SuperHero2("Tony", "Stark");
console.log(ironMan.printMyName());

// -----------------------------

// Iterables & iterators

// Make it possible to access data from a collection one at a time which allow use to focus on what to do with that data rather than how to access that data.

// Iterables & Iterators protocols
// Some of the data structures would implement the iterable protocol by default, example - strings, arrays & 2 more (maps & sets) - they are termed as built in iterables & a new looping construct which is the for of loop was introduce to iterate over an iterable
// We don't have to worry about accessing the element from the data structure, it is just given to us one by one in sequence allowing us to focus on functionality

// An object which implements the iterable protocol is called an iterable.

// For an object to be an iterable it must implement a method at the key [Symbol.iterator]
// That method should not accept any argument & should return an object which conforms to the iterator protocol.
// The iterator protocol decides whether an object is an iterator
// the obj must have a next() method that returns an obj with two properties
// value which gives the current element
// done: which is a boolean value indicating weather or not there are any more elements that could be iterated upon

// Our goal is to make this obj iterable so when this obj is used with the for of loop it will print hello world one word at a time
// own iterable
// js dones it internally for strings, arrays, maps & sets
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}

// Generators -
// They are special class functions that simplify the task of writing iterators

// rewrite the above example

function normalFunc() {}
// normal func follows the run to completion model

function* generatorFunc() {
  // yeild is an operator with which a generator can pause it self / it doesn't return it yields the value
  yield "Hello";
  yield "world";
}
// In generator func, it can stop in mid way & continue from where is stopped or it can pause the execution
const generatorObj = generatorFunc();
// generatorObj is an iterator created by generatorFunc for us
for (const word of generatorObj) {
  console.log(word);
}

// Generators were introduced in 2015 & allow you to define a iterative behaviour by writing a single function whose execution is not continous
