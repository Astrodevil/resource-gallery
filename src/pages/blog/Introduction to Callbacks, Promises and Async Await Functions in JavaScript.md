---
title: "Introduction to Callbacks, Promises and Async/Await Functions in JavaScript"
excerpt: "In this blog, we will be discussing callbacks, promises and async/await functions in javascript also we will be learning about synchronous and asynchronous programming languages. If you're new to JavaScript programming, or even if you've been working with the language for a while, you may have heard these terms thrown around. Today we will be discussing each of these terms in detail.😀"
publishDate: "2022-12-05"
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1685114174416/69babf6a-1893-482c-82d5-4caa634b2af4.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
category: "JavaScript"
author: "Divesh Mahajan"
layout: "@layouts/BlogLayout.astro"
tags: [webdev, scripting, javascript, async/await, promises]
---

**About**

In this blog, we will be discussing callbacks, promises and async/await functions in javascript also we will be learning about synchronous and asynchronous programming languages. If you're new to JavaScript programming, or even if you've been working with the language for a while, you may have heard these terms thrown around. Today we will be discussing each of these terms in detail.😀

**What are Synchronous and Asynchronous languages?**

In synchronous languages, code is executed sequentially means each line of code is executed one after another, and the program waits for each task to complete before moving on to the next one whereas asynchronous languages allow tasks to run independently and concurrently. Instead of waiting for each task to complete, the program continues executing other code while the tasks are being processed in the background.

In JavaScript, code execution is typically synchronous. However, there are cases where we need to perform tasks that take time, such as making an API call or reading a file from a disk. These tasks are asynchronous because they don't block the execution of other code. So to handle asynchronous code in Javascript we use callbacks, promises and async/await functions.

🚀Let's understand these concepts one by one.

**Callbacks**

**_Callbacks are functions that are passed as arguments to other functions and are executed at a later time or after a certain event occurs._**

In JavaScript, functions can be passed as arguments to other functions. A callback is simply a function that is passed as an argument to another function and gets executed after the main function has completed its task. Let's understand callback functions from the examples.

**Simple Code**

function greet(name, callback) {
console.log("Hello, " + name + "!");
callback();
}
function sayGoodbye() {
console.log("Goodbye!");
}
greet("Divesh", sayGoodbye);

In this example, we have a function called greet that takes two arguments: name and callback. It logs a greeting message with the provided name and then executes the callback function. We also have a separate function called sayGoodbye that simply logs "Goodbye!".

But one of the major drawbacks of a callback is callback hell. A Callback hell occurs when multiple asynchronous operations are nested within each other using callbacks, resulting in deeply nested and hard-to-read code. This nesting can make the code difficult to maintain, debug, and understand. It becomes challenging to handle errors and manage the flow of execution.

**Example of Callback hell :**

const cart = ['item1', 'item2', 'item3']; // array of items
createOrder(cart, function (){
proceedPayment( function (){
showOrderSummary( function(){  
 updateWallet()
})
})
})

In the above dummy example, all the functions are interdependent. proceedPayment should work only after the order is created by createOrder. showOrderSummary should only happen after the payment is done by proceedPayment. updateWallet should only work after we get the order summary from showOrderSummary. Each function is taking another function as a callback.

This causes a pyramid of doom structure causing our code to grow horizontally, making it tough to manage our code.

Now, promises and async/await functions come to the rescue, offering a cleaner and more understandable way to handle asynchronous code.

**Promises**

We all make and break promises in real life similar thing happens with promises in javascript. Promises were introduced in ECMAScript 6 (ES6) as a solution to the callback hell problem. Promises are objects used to handle asynchronous operations and represent the eventual completion (or failure) of an asynchronous task. Promises offer a cleaner, more organized method to create asynchronous code, making it simpler to manage and think through asynchronous activities. The below picture shows clearly how promises work.

![Flow](https://cdn.hashnode.com/res/hashnode/image/upload/v1632595509815/tx3xM2Yi9.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp&auto=compress,format&format=webp)

**There are three main aspects of promises.**

**_Creating a promise_**
**_Handling a promise_**
**_Chaining of promises_**

Let's understand these aspects in more detail.

**Creating Promises**

To create a promise, you use the Promise constructor, which takes a function (often called the "executor") as an argument. The executor function receives two parameters: resolve and reject. Inside the executor function, you perform your asynchronous task and call either resolve or reject based on the outcome.

**Here's an example of creating a promise that simulates fetching data from a server:**

const fetchData = new Promise((resolve, reject) => {
setTimeout(() => {
const data = { id: 1, name: "John Doe" };
resolve(data);
}, 2000);
});

**Handling Promises**

Once a promise is created, you can attach callbacks to handle the result using the then() and catch() methods.

The then() method is used to handle the fulfilled promise and takes a callback function as an argument. The resolved value (or the result) of the promise is passed as an argument to this callback.

The catch() method is used to handle a rejected promise and takes a callback function as an argument. The reason or error associated with the rejected promise is passed as an argument to this callback.

**Here's an example of using then() and catch() with the fetchData promise:**

fetchData
.then((data) => {
// Handle the fulfilled promise (access the resolved value)
console.log("Fetched data:", data);
})
.catch((error) => {
// Handle the rejected promise (access the error)
console.log("Error:", error);
});

**Chaining Promises**

Promises can be chained together using then() to create a sequence of asynchronous operations. Each then() callback returns a new promise, allowing you to handle the result of the previous operation and continue with the next one. By chaining promises, you can create a more sequential and readable flow of asynchronous operations.

fetchData
.then((data) => {
// Handle the first fulfilled promise
console.log("Fetched data:", data);
return someOtherAsyncTask(); // Return a new promise
})
.then((result) => {
// Handle the result of the second fulfilled promise
console.log("Second async task result:", result);
})
.catch((error) => {
// Handle any errors in the chain
console.log("Error:", error);
});

The thing is, chaining promises together just like callbacks can get pretty bulky and confusing. One interesting thing about promises is that we cannot store a promise into a variable. But async-await can make it possible. Here is why Async and Await were brought about.

**Async/Await**

**_Async-await is syntactic sugar for Promises._**

Async/await is a newer syntax introduced in ECMAScript 2017 (ES8) that provides a more elegant way to write asynchronous code. It is built on top of promises and offers a more sequential and readable approach.

Before async/await, developers had to use callbacks or Promises to handle asynchronous code. This approach could quickly become complex and difficult to manage when dealing with complex asynchronous operations or multiple asynchronous calls.

Let's see what are these async and await keywords used for.

**_async:_**It ensures that the function returns a promise, and wraps non-promises in it.

**_await:_**It makes JavaScript wait until that promise settles and returns its result.

_Note: await keyword works only inside async functions_

**Let's consider an example where we fetch user data from an API asynchronously using the fetch() function:**

async function fetchUserData() {
try {
const response = await fetch('https://api.example.com/users');
const data = await response.json();
console.log('Fetched user data:', data);
} catch (error) {
console.log('Error fetching user data:', error);
}
}
fetchUserData();

_We declare an async function fetchUserData(). Inside this function, we make an asynchronous HTTP request to the API endpoint using the fetch() function. The fetch() function returns a promise that resolves to a response object._

_We use the await keyword to pause the execution and wait for the promise returned by fetch() to resolve. The resolved value, the response object, is stored in the response variable._

_We then use another await keyword to pause and wait for the promise returned by the response.json() method, which parses the response body as JSON. The parsed JSON data is stored in the data variable._

_Finally, we log the fetched user data to the console. If any error occurs during the async function execution, it will be caught in the catch block, allowing us to handle and log the error._

The async/await syntax makes asynchronous code more readable and easier to understand, as it closely resembles synchronous code. Error handling becomes straightforward with async/await. We can use traditional try-catch blocks to catch and handle errors within the same code block.

Overall, async/await simplifies the process of writing and maintaining asynchronous code, enhances code readability, and improves error handling, making it a preferred choice for many developers working with JavaScript's asynchronous operations.

Callbacks, Promises and async/await functions provide powerful tools to handle asynchronous code in JavaScript. Promises allow you to write cleaner and more manageable asynchronous code, while async/await offers an even more intuitive and sequential approach. By mastering these concepts, you'll be well-equipped to handle asynchronous operations effectively in your JavaScript applications.

That was it for this blog. I hope you enjoyed it. Do comment your thoughts about this blog.

If you’re a regular reader, thank you, you’re a big part of the reason I’ve been able to share my learnings with you.👋
