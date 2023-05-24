---
title: "Top 10 JavaScropt Tips & Tricks"
excerpt: "JavaScript is one of the most popular scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else, you may have noticed the websites these became too interactive/responsive and more beautiful, all thanks to Js and it's libraries"
publishDate: "2023-05-25T09:55:36.050Z"
image: "https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
category: "TIPS & TRICKS"
author: "Raj Motwani"
layout: "@layouts/BlogLayout.astro"
tags: [webdev, scripting, javascript, Js, tips, tricks]
---

JavaScript is one of the most popular scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else, you may have noticed the websites these became too interactive/responsive and more beautiful, all thanks to Js and it's libraries.
Here are the top 10 tips & tricks which can make your day easier if you are using Js.

## 1. No More console.log()

You must have used console.log() alot to print the outputs, but you can shorten it by-

```
var c = console.log.bind(document)
c(121)
c("Hello Guys")
```

Now you can console.log() anything just by using c().

## 2. Use isNumber

This tip will show how to check whether a value or variable holding a number ( integer, float and etc ) or not.

```
function isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n); }
console.log(isNumber(200)) // true
console.log(isNumber(12.92)) // true
console.log(isNumber("JavaScript")) // false
```

## 3. camelCase

While writing code you must have felt frustration at elast once while dealing with lots of variables, so it's better to name the as per their functionality and usage in "camelCase" writing methods. Majority of the developers use this method for writing compound words.

```
var maxNumber;
var minTime;
maxPower();
```

## 4. Quick Calculate Performance

Do you know you can calculate the performance of your written JavaScript code using this tip is, personally I use it to calculate the performance of my JavaScript program realated to DSA.

```
const starttime = performance.now();
//some program
const endtime = performance.now();
const totaltime = startTime - endTime
console.log("function takes "+totaltime +" milisecond");
```

## 5. Exchange Variables

You probably swap the two variables using a third variable temp/xyz. But do you know you can do it without using a 3rd variable exchange variables using destructuring.

```
var a = 4;
var b = 8;
[a,b] = [b,a]
console.log(a,b) // 8 4
```

## 6. Sort Alphabetically

Sorting is a common problem in programming and you must have faced it at least once, this tip will save your valuable time by writing a long code to sort a string alphabetically.

```
function alphabetSort(arr)
{
return arr.sort((a, b) => a.localeCompare(b));
}
let array = ["d", "c", "b", "a"]
console.log(alphabetSort(array)) // ["a", "b", "c", "d"]
```

## 7. Template Literals:

Template literals provide a convenient way to concatenate strings and embed expressions within them. They use backticks (`) instead of single or double quotes. Template literals support multi-line strings and make string interpolation more readable.

```
const name = 'Raj';
const age = 21;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is Raj and I am 21 years old.
```

## 8. Object Shorthand Notation:

When defining object literals, you can use the shorthand notation for properties if the property name and value have the same identifier. It simplifies the code and makes it more concise.

```
const name = 'Raj';
const age = 21;

// Without shorthand notation
const person = {
name: name,
age: age
};

// With shorthand notation
const person = { name, age };
```

## 9. Use the Strict Mode:

Enabling strict mode helps you write more reliable and maintainable code by catching common mistakes and enforcing stricter rules. It helps in avoiding accidental global variables, prohibits duplicate parameter names, and enables more secure JavaScript coding practices. To enable strict mode, add the following line at the beginning of your script or function: "use strict".

## 10. Creating completely empty objects

If asked to create an empty object in JavaScript, our first go-to method will use in curly braces and assign it to a variable. But this is not a blank object as it still has object properties of JavaScript such as **proto** and other methods.

// Using .create() method to create a completely empty object


    let raj = Object.create(null);

    // raj.__proto__ === "undefined"
    
    

**Follow Me on [LinkedIn](https://www.linkedin.com/in/raj-motwani-978143204/)**


