const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.officeNumber = number;
    }
    getNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;