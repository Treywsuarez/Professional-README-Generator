const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

// Test the prompt with inquirer and prompt 
// inquirer
//   .prompt([


 const questions = [   
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project: "

    },

    {
        type: "input",
        name: "installion",
        message: "Please provide information on how to use your project: "
    },

    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for your project?",
        choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3", "Unlicense"]
    },

    {
        type: "input",
        name: "contributing",
        message: "Please provide guidelines for how a user can contribute to your project: "
    },

    {
        type: "input",
        name: "tests",
        message: "Please provide instructions for how to run test for your project: "
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log('SampleREADME.md file successfully created!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("SampleREADME.md", markdown);
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
