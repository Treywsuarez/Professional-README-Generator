// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Table of Contents  
 1. [Description](#description)
 2. [Installation](#installation)
 3. [Usage](#usage)
 4. [Contributing](#contributing)
 5. [Testing](#testing)
 6. [Questions](#questions)
 7. [License](#license)
 
 ## Description
 ${data.description}

 ## Installation
 ${data.installation}
 
 ## Usage
 To use the app:  
 ${data.usage}
 
 ## Contributing
 If you wish to contribute:  
 ${data.contributing}

 ## Testing
 To test the application: 
 ${data.tests}

 ## Questions
 Feel free to contact me if you have any questions! 
 Reach me via email: ${data.email}  

 My GitHub profile:
 [TreyS Profile](https://github.com/${data.github})
 
 ## License
 ${data.license} 

`;
}

module.exports = generateMarkdown;