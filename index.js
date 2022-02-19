// Imports needed for this file 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
// Empty employees array ready for all employee objects to be added
const employees = [];
// Initialize function
function init() {
    questions();
}
// Genrates all HTML data
function generateHTML(data) {
    let cards = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === 'Manager') {
            cards += `
            <div
                class="bg-white rounded-lg border border-gray-200 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-4">
                <i class="text-4xl  text-white fa-solid pt-6 fa-user-secret"></i>
                    <h3 class="mb-1 text-3xl font-medium text-gray-900 dark:text-white">${data[i].getName()}</h3>
                    <span class="text-md mb-6 text-gray-500 dark:text-gray-400">${data[i].getRole()}</span>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID: ${data[i].getId()}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: <a href = "mailto: ${data[i].getEmail()}" class="hover:text-white">${data[i].getEmail()}</a></p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone Number: ${data[i].getNumber()}</p>
                </div>
            </div>`;
        }
        if (data[i].getRole() === 'Engineer') {
            cards += `
            <div
                class="bg-white rounded-lg border border-gray-200 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-4">
                    <i class="text-4xl text-white fa-solid pt-6 fa-house-laptop"></i>
                    <h3 class="mb-1 text-3xl font-medium text-gray-900 dark:text-white">${data[i].getName()}</h3>
                    <span class="text-md mb-6 text-gray-500 dark:text-gray-400">${data[i].getRole()}</span>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID: ${data[i].getId()}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: <a href = "mailto: ${data[i].getEmail()}" class="hover:text-white">${data[i].getEmail()}</a></p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Github: <a href = "https://github.com/${data[i].getGithub()}" class="hover:text-white" target="_blank">${data[i].getGithub()}</a></p>
                </div>
            </div>`;
        }
        if (data[i].getRole() === 'Intern') {
            cards += `
            <div
                class="bg-white rounded-lg border border-gray-200 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-4">
                    <i class="text-4xl text-white fa-solid pt-6 fa-briefcase"></i>
                    <h3 class="mb-1 text-3xl font-medium text-gray-900 dark:text-white">${data[i].getName()}</h3>
                    <span class="text-md mb-6 text-gray-500 dark:text-gray-400">${data[i].getRole()}</span>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID: ${data[i].getId()}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: <a href = "mailto: ${data[i].getEmail()}" class="hover:text-white">${data[i].getEmail()}</a></p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">School: ${data[i].getSchool()}</p>
                </div>
            </div>`;
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://kit.fontawesome.com/0f4878dd04.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header
            class="h-24 flex items-center justify-center text-xl bg-gray-500 text-white shadow-md shadow-slate-500 mb-8 sm:mb-24">
            <h1 class="sm:text-4xl">${data[0].getName()}'s Team</h1>
        </header>
        <main class="container sm:mx-auto">
            <section class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-8 gap-8">
                ${cards}
            </section>
        </main>
    </body>
    </html>
    `
}
// Function for creating HTML document
function writeFile(data, filename) {
    let  file = filename.toLowerCase();
    if (fs.existsSync(__dirname + `/dist/${file}-team.html`)) {
        console.log(`File ${file} already exists!! Please enter a new file name?`)
        inquirer 
            .prompt([
                {
                    name: 'filename',
                    message: `Please enter a new filename?`,
                    type: 'input'
                }
            ])
            .then((val) => {
                let newName = val.filename.toLowerCase();
                fs.writeFile(__dirname + `/dist/${newName}-team.html`, data, (err) => {
                    if (err) {
                        console.log(`Error: ${err}! Please try again!`);
                    }
                    console.log(`${newName}s-team.html Created Successfully!`);
                })
            })
    }
    else { 
        fs.writeFile(__dirname + `/dist/${file}-team.html`, data, (err) => {
            if (err) {
                console.log(`Error: ${err}! Please try again!`);
            }
            console.log(`${file}s-team.html Created Successfully!`);
        })
    }
}
// Function to validate weather a correct email has been entered
const emailValidator = (email) => {
    const emailAddress = email;

    if (emailAddress.includes('.') && emailAddress.includes('@') && emailAddress.includes('.com    ')) {
        return true;
    }
    return "Please enter a valid email address!";
}
// Function to validate whether a given number is of the correct data type and length
const numberValidator = (number) => {
    let num = number;
    if (!isNaN(num) && num.length >= 8) {
        return true;
    }
    return "Please enter at least an 8 digit phone number!";
}
// Function to validate whether a given ID number is the correct data type and length
const idValidator = (id) => {
    let num = id;
    if (!isNaN(num) && num.length <= 4) {
        return true;
    }
    return 'Please enter a number no bigger then 4 digits!'
}
// Function too asks all the base questions
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
            if (val.type === 'Engineer') {
                engineerQuestions();
            }
            if (val.type === 'Intern') {
                internQuestions();
            }
        })
        .catch((err) => console.error(`Error: ${err}! Please try again!`));
}
// Function too asks all the questions related to an intern
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
                choices: ['Engineer', 'Intern', 'No']
            }
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.school);
            employees.push(intern);
            if (val.type === 'Engineer') {
                engineerQuestions();
            }
            if (val.type === 'Intern') {
                internQuestions();
            }
            if (val.type === 'No') {
                // generateHTML(employees);
                writeFile(generateHTML(employees), employees[0].getName());
            }
        })
        .catch((err) => console.error(`Error: ${err}! Please try again!`));
}
// Function too asks all the questions related to an engineer
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
            if (val.type === 'Engineer') {
                engineerQuestions();
            }
            if (val.type === 'Intern') {
                internQuestions();
            }
            if (val.type === 'No') {
                // generateHTML(employees);
                writeFile(generateHTML(employees), employees[0].getName());
            }
        })
        .catch((err) => console.error(`Error: ${err}! Please try again!`));
}
// Initialize the app
init();
