class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    
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

class ItDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        // thisを使用する前にsuperを呼び出す必要あり。
        super(id, 'IT');
        this.admins = admins;
    }

}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    readReports() {
        console.log(this.reports);
    }

}


const accounting = new AccountingDepartment('id', []);

accounting.addReport('決算書');
accounting.readReports();
