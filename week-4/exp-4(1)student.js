export default class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name:", this.name);
    }
}
