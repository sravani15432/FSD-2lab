// Arrow function with no parameters
const welcome = (): void => {
    console.log("Welcome to TypeScript!");
};

// Arrow function with parameters
const display = (name: string, age: number): void => {
    console.log("Name:", name);
    console.log("Age:", age);
};

// Arrow function with return type
const add = (a: number, b: number): number => {
    return a + b;
};

// Short arrow function (implicit return)
const square = (num: number): number => num * num;

// Arrow function returning a string
const greet = (name: string): string => `Hello, ${name}`;

// Calling the functions
welcome();

display("Sravani", 20);

console.log("Sum:", add(10, 20));

console.log("Square:", square(5));

console.log(greet("Sravani"));