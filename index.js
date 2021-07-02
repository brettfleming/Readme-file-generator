// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const utils = require('./utils/generateMarkdowns')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "username",
        message: "enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "enter your email: "
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of the project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project if any where used: ",
        choices: [
            "Apache",
            "none"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    }
];

function userPrompt() {
    inquirer.prompt(questions);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    userPrompt();
}

// Function call to initialize app
init();
