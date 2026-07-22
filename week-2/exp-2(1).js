"use strict";
// Function with no parameters and no return type
function welcome() {
    console.log("Welcome to TypeScript!");
}
// Function with parameters and no return type
function display(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
// Function with parameters and return type
function add(a, b) {
    return a + b;
}
// Function returning a string
function greet(name) {
    return "Hello, " + name;
}
// Calling the functions
welcome();
display("Sravani", 20);
let sum = add(10, 20);
console.log("Sum:", sum);
let message = greet("Sravani");
console.log(message);
