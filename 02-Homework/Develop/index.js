// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project',
    name: 'Title',
},
{
    type: 'input',
    message: 'What is the description of your project',
    name: 'Description'
},
{
    type: 'input',
    message: 'What is the installation process',
    name: 'Install',
},
{
    type: 'input',
    message: 'How do you use the application',
    name: 'Usage',
},
{
    type: 'input',
    message: 'Did anyone else contribute to this application',
    name: 'Contribution',
},
{
    type: 'input',
    message: 'How do you test your application',
    name: 'Test',
},
{
    type: 'list',
    message: 'What license are you using',
    name: 'License',
    choices: ['MIT License', 'GVL GPL License', 'Apache License', 'No License']
},
{
    type: 'input',
    message: 'What is your Github username',
    name: 'Github',
},
{
    type: 'input',
    message: 'What is your email',
    name: 'Email',
},
{
    type: 'input',
    message: 'Any questions',
    name: 'Questions',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            throw err;
        }
        console.log("ReadMe was created");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response)
    })
}

// Function call to initialize app
init();
