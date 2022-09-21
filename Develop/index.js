// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createREADme = require('/.generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
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
          name: 'instructions',
        },
        {
          type: 'input',
          message: 'What is the purpose of your project?',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Write the contribution guidelines for your project',
          name: 'contributuion',
        },
        {
            type: 'input',
            message: 'What are the test instructions for your project?',
            name: 'test',
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
            type: 'input',
            message: 'Which license would you like to use for your project?',
            name: 'license',
          },
    ]) 
    // 'What is the title of your project?',
    // 'Write a description about your project.',
    // 'What are the instructions of installation of your project?',
    // 'What is the purpose of your project?',
    // 'Write the contribution guidlines for your project.',
    // 'What are the test instructions for your project?',
    // 'What is your GitHub Username?',
    // 'What is your email?',
    // 'Which license would you like to use for your project?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', JSON.stringify(data, null, 2), (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
