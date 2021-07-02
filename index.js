// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
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
    inquirer.prompt(questions)
    .then(data => {
       const readme =  `
<h1 align="center">${data.title} </h1>
    
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

This application is covered by the ${data.license} license. 

## Contributing
${data.contributing}

## Tests
${data.tests}
    
## Questions
Reach out to me on GitHub: [${data.username}](https://github.com/${data.username})
or reach out to me by email ${data.email}
`
        fs.writeFile('generatedReadMe.md', readme, (err) => {
            if ( err ) console.log('err:', err);
        })
    })
    
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    userPrompt();
    generateMarkdown();
}

// Function call to initialize app
init();
