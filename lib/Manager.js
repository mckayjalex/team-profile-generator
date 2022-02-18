const Employee = require('./Employee')
// Sub class Manager
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
// Exports Manager class for use in index.js
module.exports = Manager;