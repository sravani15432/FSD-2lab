"use strict";
// Class implementation with constructor
class Student {
    name;
    age;
    branch;
    // Constructor
    constructor(name, age, branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }
    // Method
    display() {
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
