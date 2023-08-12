const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string. Ternary operator evaluates if there is no license, it will be an empty string. if there is one, it will render license

function renderLicenseBadge(license) {
  (!license)? ``:`[![${license} license](https://img.shilds.io/badge/License-${license}-blue.svg)](${renderLicenseLink}(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string. Put it in a switch case to evaluate license
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return `https://lbesson.mit-license.org/`;
      break;
    case 'GPL':
      return `http://perso.crans.org/besson/LICENSE.html`;
      break;
    case 'CC--0':
      return `https://creativecommons.org/licenses/by-nd/4.0`;
      break;
    default:
      return ''; //returning empty string here if there is no valid license passed through function
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  (!license)?``:`##Licenses 
  This project is using the ${license} license. To learn more, please click the license link listed above.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
