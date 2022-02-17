const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
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
    getId() {
        return inquirer
        .prompt([
            {
              type: "input",
              name: "id",
              message: "Please enter an employee ID number?",         
            }
          ])
          .then((val) => {
            
          })
    }
    getEmail() {
        return inquirer
        .prompt([
            {
              type: "input",
              name: "email",
              message: "Please enter a valid email address?",         
            }
          ])
          .then((val) => {
          })
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;