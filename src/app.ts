class Department {
  
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
    
    }

    describe(this: Department) {
        console.log(`Department(${this.id}: ${this.name})`);
    }

    addEmployee(employee: string) {
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
