const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        return inquirer
        .prompt([
            {
              type: "input",
              name: "name",
              message: "Please enter employees name?",         
            }
          ])
          .then((val) => {
            
          })
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;