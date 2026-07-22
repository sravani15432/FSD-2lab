// Class implementation with Access Modifiers

class Student {
    public name: string;
    private age: number;
    protected branch: string;

    // Constructor
    constructor(name: string, age: number, branch: string) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }

    // Public method
    public display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Branch:", this.branch);
    }
}

// Creating object
let student1 = new Student("Sravani", 20, "AI & DS");

// Accessing public member
console.log("Name:", student1.name);

// Calling method
student1.display();

// The following statements will cause errors
// console.log(student1.age);      // Error: private member
// console.log(student1.branch);   // Error: protected member