// TODO: Include packages needed for this application
const fs = require('fs'); //calling file system into my project so we can write a new file
const inquirer = require('inquirer'); //installed inquirer package via npm and calling it into my project here
const generateMarkdown = require('./utils/generateMarkdown'); //pulling required document for the template

// TODO: Create an array of questions for user input
// Using inquirer here to gather information from the user so we can use it later :)
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Welcome to this professional README generator!! Please enter your name?',
            validate: inputName=>{
                return (inputName) ? true 
                : console.log('Please enter your name.');
                false
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your login on github?',
            validate: inputGithub=>{
                return (inputGithub) ? true 
                : console.log('Please enter your github username.');
                false
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: inputEmail=>{
                return (inputEmail) ? true 
                : console.log('Please enter your email for your README.');
                false
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
            validate: inputTitle=>{
                return (inputTitle) ? true 
                : console.log('Your project must have a title.');
                false
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project here.',
            validate: inputDescription=>{
                return (inputDescription) ? true 
                : console.log('Please enter a description of your project.');
                false
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Is there any special installation for this project?',
            validate: inputInstallation=>{
                return (inputInstallation) ? true 
                : console.log('Please enter your installation steps to run this project.');
                false
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project supposed to be used?',
            validate: inputUsage=>{
                return (inputUsage) ? true 
                : console.log('Please enter how your application is supposed to be used.');
                false
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Was there anyone who helped build this project? If so, who are they and what did they do?',
            validate: inputContribution=>{
                return (inputContribution) ? true 
                : console.log('Please enter anyone that helped you build this project. If no one helped, put you as the "Sole Author"');
                false
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests were conducted in this project?',
            validate: inputTests=>{
                return (inputTests) ? true 
                : console.log('Please list tests you used to build this project.');
                false
            }
        },
        {
            type: 'confirm',
            name: 'licensesConfirm',
            message: 'Would you like to add a license to this README?',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to add?',
            choices: ['MIT','CC--0','GLP'],
            when: ({ confirmLicenses }) => confirmLicenses ? true : false,
        }
    ]).then((answer)=>{
        const markdownContent = generateMarkdown(answer);
        fs.writeFile(`${answer.projectTitle}`, markdownContent,(err)=>{
            err?console.log(err):console.log('Successfully Built README')
        });
    });

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
