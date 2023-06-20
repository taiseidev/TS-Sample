"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeesInformation();
accounting.describe();
//# sourceMappingURL=app.js.map