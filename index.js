// TODO: Include packages needed for this application
const fs = require('fs'); //calling file system into my project so we can write a new file
const inquirer = require('inquirer'); //installed inquirer package via npm and calling it into my project here
const generateMarkdown = require('./utils/generateMarkdown'); //pulling required document for the template

// template to generate form 
const getMarkUp = ({username, projectTitle})=>(
    ` `
)

// TODO: Create an array of questions for user input
// Using inquirer here to gather information from the user so we can use it later :)
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your login on github?',
            validate: inputUserName=>{
                return (inputUserName) ? true 
                : console.log('Please enter your username to put on your project.');
                false
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project here.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Is there any special installation for this project? if yes, please ?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project supposed to be used?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Was there anyone who helped build this project? If so, who are they and what did they do?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests were conducted in this project?'
        },
    // ]).then((response)=>{
    //     console.log(response);
    //     fs.writeFile('README.me', ,(err)=>{
    //         err?console.log(err):console.log('Successful Build')
    //     })
    // })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
