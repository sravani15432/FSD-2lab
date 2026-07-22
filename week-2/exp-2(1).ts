// Function with no parameters and no return type
function welcome(): void {
    console.log("Welcome to TypeScript!");
}

// Function with parameters and no return type
function display(name: string, age: number): void {
    console.log("Name:", name);
    console.log("Age:", age);
}

// Function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Function returning a string
function greet(name: string): string {
    return "Hello, " + name;
}

// Calling the functions
welcome();

display("Sravani", 20);

let sum: number = add(10, 20);
console.log("Sum:", sum);

let message: string = greet("Sravani");
console.log(message);