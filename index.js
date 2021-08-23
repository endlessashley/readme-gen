// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require ("./utils/generateMarkdown.js");
//const writeAsyncFile = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
        type: "input",
        name: "Email",
        message: "What is your e-mail address?"
    },
    {
       type: "input",
       name: "Github",
       message: "What is your Github username?"
    },
    {
        type: "list",
        name: "License",
        message: "What license do you need?",
        choices: [
            "MIT License",
            "Apache License",
            "Mozilla Public License",
            "None"
        ],
        initial: 1
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is your project's description?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are your project's installation instructions?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is your project's usage information?"
    },
    {
        type: "input",
        name: "Contribution",
        message: "What are Use tthe contribution guidelines for your project?"
    },
    {
        type: "input",
        name: "Testing",
        message: "What are your project's testing instructions?"
    }

])
};




// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (error) => {
    if (error) throw error;
    console.log(error);
    console.log("ReadMe Succesfully Generated!");
   });}

// TODO: Create a function to initialize app
 function init() {
    questions()
    .then((data) => writeToFile("README.md", generateMarkdown(data)))
    //.then(() => console.log ("README written!"))
    //.catch((err) => console.error(err))
};

// Function call to initialize app
init();
