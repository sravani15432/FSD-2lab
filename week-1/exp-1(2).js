"use strict";
// any type
let value;
value = 100;
console.log("Any (Number):", value);
value = "Hello";
console.log("Any (String):", value);
value = true;
console.log("Any (Boolean):", value);
// unknown type
let data;
data = "TypeScript";
console.log("Unknown:", data);
// Type checking before using unknown
if (typeof data === "string") {
    console.log("Length:", data.length);
}
// void type
function greet() {
    console.log("Welcome to TypeScript");
}
greet();
