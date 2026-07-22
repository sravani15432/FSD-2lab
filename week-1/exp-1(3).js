"use strict";
// Variable Annotations
let studentName = "Sravani";
let age = 20;
let isStudent = true;
// Array Annotations
let marks = [90, 85, 95, 88];
let subjects = ["Java", "TypeScript", "Node.js"];
// Function Parameter and Return Type Annotations
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello, " + name;
}
function displayStatus(status) {
    console.log("Student Status:", status);
}
// Using Annotated Variables
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);
console.log("Subjects:", subjects);
// Using Annotated Functions
let sum = add(10, 20);
console.log("Sum:", sum);
let message = greet(studentName);
console.log(message);
displayStatus(isStudent);
