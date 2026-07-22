// Class using readonly and static members

class Student {
    // Readonly member
    readonly rollNo: number;

    // Instance members
    name: string;
    branch: string;

    // Static member
    static college: string = "Shri Vishnu Engineering College for Women";

    // Constructor
    constructor(rollNo: number, name: string, branch: string) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    // Method
    display(): void {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Branch:", this.branch);
        console.log("College:", Student.college);
    }
}

// Creating objects
let student1 = new Student(101, "Sravani", "AI & DS");
let student2 = new Student(102, "Anjali", "CSE");

// Display details
student1.display();

console.log("----------------");

student2.display();

// Accessing static member
console.log("College Name:", Student.college);

// The following statement will cause an error
// student1.rollNo = 201;   // Error: Cannot assign to 'rollNo' because it is a readonly property.