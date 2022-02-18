const Employee = require('./Employee');
// Sub class Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
// Exports Intern class for use in index.js
module.exports = Intern;