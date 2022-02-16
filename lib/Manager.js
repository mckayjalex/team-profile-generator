const Employee = require('./Employee')

class Manager extends Employee {
    constructer(number) {
        this.officeNumber = number;
    }
    getRole() {
        return 'Manager';
    }
}
