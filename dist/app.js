"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department(${this.id}: ${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('fl;dsj', 'Accounting');
console.log(accounting);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeesInformation();
accounting.describe();
//# sourceMappingURL=app.js.map