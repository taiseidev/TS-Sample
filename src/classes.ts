abstract class Department {
    protected employees: string[] = [];
    static fiscalYear = 2023;

    constructor(protected readonly id: string, public name: string) {
    
    }

    static createEmployees(name: string) {
        return {name: name};
    }

    abstract describe(this: Department) : void;

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

    describe(this: Department): void {
        throw new Error("Method not implemented.");
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('正しい値を設定してください');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    readReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    describe(): void {
        console.log("会計部門 - ID" + this.id);
    }

}

const accounting = AccountingDepartment.getInstance();

accounting.printEmployeesInformation();
