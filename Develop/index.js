// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Begin Readme generator and data input 
const generateReadme = (data) =>
`
# ${data.title}
## Description
${data.description}

## Table of Contents
[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution](#contribution)

[Test Instructions](#testinstructions)

[Questions](#github)

## Installation
${data.installation}
    
## Usage
${data.usage}
    
## License
Check out the badges hosted by [shields.io](https://shields.io/). [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
    
## Contributions
${data.contribution}
    
## Test Instructions
${data.testinstructions}

## Questions 
If you have any questions, reach out to me at:
${data.github}
${data.email}
`

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description about your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the instructions of installation of your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the purpose of your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Write the contribution guidelines for your project',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What are the test instructions for your project?',
            name: 'testinstructions',
        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Which license would you like to use for your project?',
            name: 'license',
            choices: ['MIT', 'Apache_2.0', 'Boost_1.0'],
        },
    ])


    // TODO: Create a function to write README file
    // Grab the responses and generate the README with the responses.


    .then((response) => {
        const readmeContent = generateReadme(response)
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    })