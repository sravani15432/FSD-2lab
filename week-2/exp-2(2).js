"use strict";
// Arrow function with no parameters
const welcome = () => {
    console.log("Welcome to TypeScript!");
};
// Arrow function with parameters
const display = (name, age) => {
    console.log("Name:", name);
    console.log("Age:", age);
};
// Arrow function with return type
const add = (a, b) => {
    return a + b;
};
// Short arrow function (implicit return)
const square = (num) => num * num;
// Arrow function returning a string
const greet = (name) => `Hello, ${name}`;
// Calling the functions
welcome();
display("Sravani", 20);
console.log("Sum:", add(10, 20));
console.log("Square:", square(5));
console.log(greet("Sravani"));
