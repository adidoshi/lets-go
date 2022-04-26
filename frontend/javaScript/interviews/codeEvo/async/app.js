// Asynchronous JavaScript

// What & why of async JS?
// Javascript is a synchronous, blocking, single-threaded language.

// Synchronous -> Code executes top to down, with only one line executing at any given time. If we have two functions (A & B) which log messages to the console, func A will log first then B.

function A() {
  console.log("A");
}

function B() {
  console.log("B");
}

A();
B();

/* Blocking -> 
- No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed.
- If function A had to execute an intensive chunk of code, Javascript has to finish that without moving on to function B. Even if that code takes 10 seconds or 1 min.
- So for ex, when a web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen. The browser is blocked from continuing to handle user input & perform other tasks until the web app returns control of the processor.
*/

// Single threaded -
/*
A thread is simply a process that your javascript program can use to run a task.
Each thread can only do one task at a time 
Javascript has just the one thread called the main thread for executing any code
*/

// For synchronous problem you can give an ex of data fetching from server/ db (you have to wait until you get the response)

// ---------------------------

// Async JS - How?
// We need new pieces which are outside of Javascript to help us write asynchronous code which is where web browsers come into play.

// Web browsers define functions and API's that allows us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs.

// For example - that could be the passage of time (setTimeout or setInterval), the user's interaction with the mouse (addEventListener) or the arrival of data over the network (callbacks, Promises, async-await)

// You can let your code do several things at the same time without stopping or blocking your main thread.

// ----------------------------

// Timeouts - After a set time period elapsed (Traditional way)
// setTimeout() function executes a particular block of code once after a specified time has ealpsed.

// setTimeout(function, duration, param1, param2)

function greet(name) {
  console.log(`Good morning ${name}`);
}

// setTimeout(greet, 1000, "Aditya");

// TO clear a timeout, you can use the clearTimeout() method passing in the identifier returned by setTimeout as a parameter.

const timeoutId = setTimeout(greet, 1000, "Aditya");
// This will ensure that the greet function will not run after the 1 sec timeout.
clearTimeout(timeoutId);

// A more practical scenario is clearing timeouts when the component is unmounting to free up the resources and also prevent code from incorrectly executing on an unmounted component.

// Intervals -
// The setInterval() function repeatedly runs the same code over and over again at regular intervals.

// setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// Intervals keep running a task forever so you should clear the interval when appropriate

const intervalId = setInterval(
  (name) => {
    console.log(`We need to clear this ${name}`);
  },
  1000,
  "Adii"
);
clearInterval(intervalId);

// Timers & intervals are not part of JavaScript itself

// duration parameter is the minimum delay, not guranteed delay.

// If we pass 2000 milliSeconds for duration, 2 sec is the minimum time after which the passed in function will execute, it would infact take 5sec. Javascript will only run the function when 2 sec are elapsed & callstack is empty if not the func has to wait before it is executed.

function greet2() {
  console.log("Hello");
}
// setTimeout(greet2, 0);

// So even if we pass 0 milliseconds as a parameter for duration in setTimeout, it doesn't imply that the func has to execute immediately. That is the min duration after which the func will run.

// Recursice setTimeout - It is possible to achieve the same effect as setInterval
// setTimeout(function run() {
//   console.log("Hello");
//   setTimeout(run, 100);
// }, 100);

// Irrespective of how long the code takes to run, the interval will remain the same, you can calculate a different delay before running each iteration.

// For setInterval - the duration interval includes the time taken to execute the code you want to run, it is always a fixed interval duration

// Callbacks -
// In JS, functions are first class objects
// Just like an object, a function can be passed as an argument to a function
// A function can also be returned as values from other functions

function greet0(name) {
  console.log(`Hello ${name}`);
}

function greetAditya(greetFn) {
  const name = "Adii";
  greetFn(name);
}

greetAditya(greet0);

// The function which accepts a function as an argument or returns a function is called a higher order function.

function higherOrderFunc(callback) {
  const name = "ADI";
  callback(name);
}

higherOrderFunc(greet0);

// Synchronous callbacks vs asynchronous callbacks -
// A callback which is executed immediately is called synchronous callback

// previous example was of synchronous callback

// Asynchronous callback - It is a callback that is often used to continue or resume code execution after an asynchronous operation has completed.
// Callbacks are used to delay the execution of a function until a particular time or event has occured.
// Data fetching takes time and we can only run the function we want to after the data has been fetched and not immediately.

// Async callback examples -

// setTimeout(
//   (name) => {
//     console.log(`Hello ${name}`);
//   },
//   1000,
//   "Adi"
// );

// document.querySelector("#btn").addEventListener("click", () => {
//   document.querySelector("#demo").innerHTML = "Hello World";
// });

// Callbacks allows you to delay the execution of a function

// Problem with the callbacks pattern -
// If you have multiple callback functions where each level depends on the result obtained from the previous level, the nesting of functions becomes so deep that the code becomes difficult to read & maintain.

// Callback hell -

let message = document.querySelector("#message");
setTimeout(() => {
  message.innerHTML = 10;
  setTimeout(() => {
    message.innerHTML = 9;
    setTimeout(() => {
      message.innerHTML = 8;
      setTimeout(() => {
        message.innerHTML = 7;
        setTimeout(() => {
          message.innerHTML = 6;
          setTimeout(() => {
            message.innerHTML = 5;
            setTimeout(() => {
              message.innerHTML = 4;
              setTimeout(() => {
                message.innerHTML = 3;
                setTimeout(() => {
                  message.innerHTML = 2;
                  setTimeout(() => {
                    message.innerHTML = 1;
                    setTimeout(() => {
                      message.innerHTML = 0;
                      setTimeout(() => {
                        message.innerHTML = "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Promises - In layman terms - Dinner scenario

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// What?
// A promise is simply an object in javascript
// A promise is always in one of the three states :-

// 1. pending: which is initial state, neither fulfilled nor rejected
// 2. fullfilled: meaning that the operation completed successfully
// 3. rejected: meaning that the operation failed

// Why?
// Promises help us deal with asynchronous code in a far more simplar way compared to callbacks

// How to create a promise?
// we create an instance of promise using the new keyword with the Promise constructor function
// const promise = new Promise()

// How to fullfill or reject the Promise?
const promise = new Promise((resolve, reject) => {
  resolve();
  reject();
});

const promise1 = new Promise((resolve, reject) => {
  // food truck was found
  // change status from 'pending' to 'fullfilled'
  resolve();
});

const promise2 = new Promise((resolve, reject) => {
  // food truck was not found
  // change status from 'pending' to 'rejected'
  //   reject();
});

// resolve() -> change status from pending to fullfilled
// reject() -> change status from 'pending' to 'rejected'

// How to execute the callback functions based on whether the promise is fullfilled or rejected?
// Success & failure callbacks -
const onFulfillment = () => {
  // resolve was called
  console.log("Set up the table to eat tacos");
};

const onRejection = () => {
  // resolve was called
  console.log("Start cooking pasta");
};

//  The Promise object gives us access to two methods/functions -> then & catch
promise.then(onFulfillment);
// promise.catch(onRejection)

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
          // food truck was found
  // change status from 'pending' to 'fullfilled'
        resolve('Bringing tacos')
    }, 5000)
})

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
          // food truck was not found
  // change status from 'pending' to 'rejected'
        reject('Not bringing tacos. Food truck not there')
    }, 5000)
}) 

const onFulfillment = (result) => {
  // resolve was called
  console.log(result)
  console.log("Set up the table to eat tacos");
};

const onRejection = (error) => {
  // resolve was called
  console.log(error)
  console.log("Start cooking pasta");
};

promise.then(onFulfillment)
promise.catch(onRejection)

*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is the eventual value the promise will return");
//   }, 300);
// });

// console.log(myPromise);

// Promise || - Interview IMP
// then() function

/* 
const promise = new Promise((resolve, reject) => {
    resolve() or reject()
})

promise.then(onFulfillment, onRejection) -> 
onRejection callback handles error from only the Promise
If your cb func itself throws an error or exception, there is no code to handle that.
*/

// then() can accept both success & error callbacks but it is not preferred over using catch function

// Promise chaining
// promise.then(onFulfillment).promise.catch(onRejection)

// Static methods -
// 1. Promise.all()

// Query multiple API's and perform some actions but only after all the APIs have finished loading

const promise4 = Promise.resolve(3);
const promise5 = 42;
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise4, promise5, promise6]).then((values) => {
  console.log(values);
});

// Even if one of the promises rejects, promise.all will reject with first rejection error message

// The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves to an array of the results of the input promises.

// 2. Promise.allSettled() waits for all input promises to complete regardless of whether or not one of them is rejected.
// Promise.all returns even if one Promise is rejected

// 3. Promise.race() method returns a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects, with the value or reason from that promise.

const promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise7, promise8]).then((value) => {
  console.log(value);
});

// --------------------------------

// Async await -

// async keyword -> use to declare async functions, they are functions that are instances of the AsyncFunction constructor

// async function always return a promise
// if you don't explicitly return a Promise, the async func will automatically wrap the value in a resolve promise

// async function greet5() {
//   return "Hello"; // promise value
// }

// greet5();

async function greet5() {
  return Promise.resolve("async Hello"); // explicit
}

greet5().then((val) => console.log(val));

// async keyword ensures the function returns a promise
// await keyword can be put infront of any async promise based function to pause your code until that promise settles and returns its result

// JavaScript engine can do other tasks in meantime but as far as greet10() function is concerned there is 1 sec suspention where no other code will execute.

async function greet10() {
  let promise11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Await hello"), 1000);
  });

  let result = await promise11;
  console.log(result);
}

greet10();

// Sequential vs concurrent vd parallel execution
function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello); // logs after 2 sec

  const world = resolveWorld();
  console.log(world); // log after 3 sec (takes an additional sec because it will execute only when hello gets resolved)
}
// unless your second function is dependent on first function you probably shouldn't be doing this, as there is unnecessary delay of 1 sec.

sequentialStart();

// Concurrent execution -
async function concurrentStart() {
  // we call both functions & store them in variables
  const hello = resolveHello();
  const world = resolveWorld();

  // here we await for the promise to be fullfilled
  console.log(await hello); // logs after 2 sec
  // since world actually resolves in 1 sec by the time hello is resolved, world is ready with its value, as soon as the exeuction comes to the await world it logs that val to console immediately, don't have to wait for additional 1 sec, this is probably which you can do in loading parts of a web page (awaiting in the right order)
  console.log(await world); // logs after 2 sec
}

concurrentStart();

// Parallel executions -> if you prefer individual functions are resolved without having to be wait for other functions to be resolved, you can use Promise.all & use async functions as arguments

// this is a case of running of whatever code resolves first
function parallel() {
  Promise.all([
    (async () => console.log(await resolveHello()))()(
      // logs after 2 sec
      async () => console.log(await resolveWorld())
    )(), // logs after 1 sec
  ]);
}
parallel();

// In the paralle function itself, if you want to execute the exection is paused at Promise.all, then

/*

async function parallel() {
  await Promise.all([
    (async () => console.log(await resolveHello()))() // logs after 2 sec
    (async () => console.log(await resolveWorld()))() // logs after 1 sec
  ])
  console.log('finally')
}
parallel()

// so javascript waits for all promises to be reolved before moving on to 'finally'
*/
