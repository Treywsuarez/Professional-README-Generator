const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");
let licenses = ["MIT","Apache 2.0 License","Eclipse Public License 1.0"]

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
    message: "Please provide a short description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide instructions for how to install your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide information on how to use your project:"
  },
  {
    type:"list",
        name:"license",
        message:"Pick the license name from this list: ",
        choices: licenses,
        filter: function(val){
            if(val== "MIT"){
                
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            } else if( val == "Apache 2.0 License"){
                return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            }else if (val == "Eclipse Public License 1.0"){
                return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
            }
        }
    },
  {
    type: "input",
    name: "contributing",
    message: "Please provide guidelines for how a user can contribute to your project:"
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide instructions for how to run tests for your project:"
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
    if (err) throw err;
    console.log(`SampleREADME.md file successfully created!`);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((answers)=> {
    if(answers.licenses== 'MIT'){
        
        answers["licenseBadge"] = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    writeToFile("SampleREADME.md", generateMarkdown(answers));
}) 
}

// function call to initialize program
init();

