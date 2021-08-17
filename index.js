// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project..",
    name: "description",
  },
  {
    type: "input",
    message: "Describe any prerequisites, libraries, OS version, etc., needed before installing program.",
    name: "dependencies",
  },
  {
    type: "input",
    message: "How/where to download your program?",
    name: "installing",
  },
  {
    type: "input",
    message: "Any modifications needed to be made to files/folders",
    name: "installing2",
  },
  
  {
    type: "input",
    message: "How to run the program",
    name: "execute",
  },

  {
    type: "input",
    message: "Any advise for common problems or issues",
    name: "help",
  },
  {
    type: "input",
    message: "Contributors names and contact info",
    name: "authors",
  },
  {
    type: "input",
    message:
      "Version history of the build",
    name: "version",
  },
  {
    type: "list",
    message: "What kind of license does your project have? ",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "Inspiration, code snippets, etc.",
    name: "acknowledgments",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
  fs.writeFileSync(fileName, content);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    let content = generateMarkdown(data);
    writeToFile("README.md", content);
  });
}

// Function call to initialize app
init();
