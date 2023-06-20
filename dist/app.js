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
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    readReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('id', []);
accounting.addReport('決算書');
accounting.readReports();
//# sourceMappingURL=app.js.map