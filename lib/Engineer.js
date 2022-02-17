const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
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
        return 'Engineer';
    }
}
module.exports = Engineer;