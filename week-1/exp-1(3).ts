// Variable Annotations
let studentName: string = "Sravani";
let age: number = 20;
let isStudent: boolean = true;

// Array Annotations
let marks: number[] = [90, 85, 95, 88];
let subjects: string[] = ["Java", "TypeScript", "Node.js"];

// Function Parameter and Return Type Annotations
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return "Hello, " + name;
}

function displayStatus(status: boolean): void {
    console.log("Student Status:", status);
}

// Using Annotated Variables
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);

console.log("Marks:", marks);
console.log("Subjects:", subjects);

// Using Annotated Functions
let sum: number = add(10, 20);
console.log("Sum:", sum);

let message: string = greet(studentName);
console.log(message);

displayStatus(isStudent);