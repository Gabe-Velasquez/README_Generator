const fs = require("fs"); //calling file system into my project so we can write a new file
const inquirer = require("inquirer"); //installed inquirer package via npm and calling it into my project here
const generateMarkdown = require("./utils/generateMarkdown"); //pulling required document for the template

// Using inquirer here to gather information from the user so we can use it later :)
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message:
        "Welcome to this professional README generator!! Please enter your name?",
      validate: (inputName) => {
        //added validate to all questions so there are values for each question
        return inputName ? true : console.log("Please enter your name.");
        false;
      },
    },
    {
      type: "input",
      name: "username",
      message: "What is your login on github?",
      validate: (inputGithub) => {
        return inputGithub
          ? true
          : console.log("Please enter your github username.");
        false;
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (inputEmail) => {
        return inputEmail
          ? true
          : console.log("Please enter your email for your README.");
        false;
      },
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
      validate: (inputTitle) => {
        return inputTitle
          ? true
          : console.log("Your project must have a title.");
        false;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a description of your project here.",
      validate: (inputDescription) => {
        return inputDescription
          ? true
          : console.log("Please enter a description of your project.");
        false;
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Is there any special installation for this project?",
      validate: (inputInstallation) => {
        return inputInstallation
          ? true
          : console.log(
              "Please enter your installation steps to run this project."
            );
        false;
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How is this project supposed to be used?",
      validate: (inputUsage) => {
        return inputUsage
          ? true
          : console.log(
              "Please enter how your application is supposed to be used."
            );
        false;
      },
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Was there anyone who helped build this project? If so, who are they and what did they do?",
      validate: (inputContribution) => {
        return inputContribution
          ? true
          : console.log(
              'Please enter anyone that helped you build this project. If no one helped, put you as the "Sole Author"'
            );
        false;
      },
    },
    {
      type: "input",
      name: "tests",
      message: "What tests were conducted in this project?",
      validate: (inputTests) => {
        return inputTests
          ? true
          : console.log("Please list tests you used to build this project.");
        false;
      },
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to add to your project?",
      choices: ["MIT", "CC--0", "GLP", "No License"],
    },
  ])
  .then((answer) => {
    const markdownContent = generateMarkdown(answer);
    fs.writeFile(`${answer.projectTitle}.md`, markdownContent, (err) => {
      //fs initiated and creates file while passing through markdown. added true false value for error, if its false, we indicate to user that we had successful build.
      err ? console.log(err) : console.log("Successfully Built README");
    });
  });
