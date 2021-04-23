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
        message: "What is your Github Username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your e-mail address?",
        name: "email",
      },
     
      {
        type: "input",
        message: "Please write a short description of your project..",
        name: "description",
      },
      {
        type: "input",
        message: "Please provide details on how to use this application.",
        name: "usage",
      },
      {
        type: "list",
        message: "What kind of license should your project have? ",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
      },
     
      {
        type: "input",
        message: "List the technologies used in this project..",
        name: "tech",
      },
      {
        type: "input",
        message: "Advise users on how they can contribute to this project",
        name: "contribution",
      },
      {
        type: "input",
        message: "Would you like to add any images? (to input image, open an issue in github, drop screenshot into open issue and paste the link)",
        name: "img",
      },
      {
        type: "input",
        message: "Describe the testing process for this app.",
        name: "test",
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
