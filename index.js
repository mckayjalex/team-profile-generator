const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];

function writeFile(data) {
    fs.writeFile('team.html', data, (err) => {
        if(err) {
            console.log(`Error: ${err}! Please try again!`);
        }
        console.log(filename, 'Created Successfully!')
    })
}

const emailValidator = (email) => {
    const emailAddress = email;

    if (emailAddress.includes('.') && emailAddress.includes('@') && emailAddress.includes('.com')) {
        return true;
    }
    return "Please enter a valid email address!";
}
const numberValidator = (number) => {
    let num = number;
    if (!isNaN(num) && num.length >= 8) {
        return true;
    }
    return "Please enter at least an 8 digit phone number!";
}
const idValidator = (id) => {
    let num = id;
    if (!isNaN(num) && num.length <= 4) {
        return true;
    }
    return 'Please enter a number no bigger then 4 digits!'
}
function questions() {
    inquirer
        .prompt([
            {
                name: 'name',
                message: `What is the team manager's name?`,
                type: 'input'
            },
            {
                name: 'id',
                message: `What is the team manager's ID number?`,
                type: 'input',
                validate: idValidator

            },
            {
                name: 'email',
                message: `What is the team manager's email address?`,
                type: 'input',
                validate: emailValidator
            },
            {
                name: 'number',
                message: `What is the team manager's number?`,
                type: 'input',
                validate: numberValidator

            },
            {
                name: 'type',
                message: `Which type of team member would you like to add?`,
                type: 'list',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.email, val.number);
            employees.push(manager);
            console.log(employees);
            if(val.type === 'Engineer') {
                engineerQuestions();
            }
            if (val.type === 'Intern') {
                internQuestions();
            }
        })
        .catch((err) => console.error(`Error: ${err}! Please try again!`));
}
function internQuestions() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "Please enter Interns name?",
                type: "input"
            },
            {
                name: "id",
                message: "Please enter Interns ID number?",
                type: "input",
                validate: idValidator
            },
            {
                name: "email",
                message: "Please enter Interns email address?",
                type: "input",
                validate: emailValidator
            },
            {
                name: "school",
                message: "Please enter the school the Intern attended?",
                type: "input"
            },
            {
                name: 'type',
                message: `Would you like to add another team member?`,
                type: 'list',
                choices: ['Engineer', 'Intern', 'I dont want to add any more team members']
            }
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.school);
            employees.push(intern);
            console.log(employees);
            if(val.type === 'Engineer') {
                engineerQuestions();
            }
            if (val.type === 'Intern') {
                internQuestions();
            }
            if(val.type === 'No') {
                writeFile(employees);
            }
        })
        .catch((err) => console.error(`Error: ${err}! Please try again!`));
}
function engineerQuestions() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "Please enter Engineers name?",
                type: "input"
            },
            {
                name: "id",
                message: "Please enter Engineers ID number?",
                type: "input",
                validate: idValidator
            },
            {
                name: "email",
                message: "Please enter Engineers email address?",
                type: "input",
                validate: emailValidator
            },
            {
                name: "github",
                message: "Please enter the github of the Engineer?",
                type: "input"
            },
            {
                name: 'type',
                message: `Would you like to add another team member?`,
                type: 'list',
                choices: ['Engineer', 'Intern', 'No']
            }
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.github);
            employees.push(engineer);
            console.log(employees);
            if(val.type === 'Engineer') {
                engineerQuestions();
            }
            if (val.type === 'Intern') {
                internQuestions();
            }
            if(val.type === 'No') {
                writeFile();
            }
        })
        .catch((err) => console.error(`Error: ${err}! Please try again!`));
}
questions();
