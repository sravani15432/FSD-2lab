// Class implementation with constructor

class Student {
    name: string;
    age: number;
    branch: string;

    // Constructor
    constructor(name: string, age: number, branch: string) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }

    // Method
    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Branch:", this.branch);
    }
}

// Creating objects
let student1 = new Student("Sravani", 20, "AI & DS");
let student2 = new Student("Anjali", 21, "CSE");

// Calling method
student1.display();
console.log("----------------");
student2.display();