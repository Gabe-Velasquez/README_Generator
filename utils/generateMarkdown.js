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
      return `https://mit-license.org/`;
      break;
    case 'GPL':
      return `https://www.gnu.org/licenses/gpl-3.0.en.html#license-text`;
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
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#Installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Tests](#tests)
  *[Questions](#questions)
  *[Credits](#credits)

  ## Description <a name='description'></a>
  ${data.description}

  ## Installation <a name='installation'</a>
  ${data.installation}

  ## Usage <a name='usage'></a>
  ${data.usage}

  ## Licenses <a name='licenses'></a>
  ${renderLicenseSection(data.license)}

  ## Contribution <a name='contribution'></a>
  ${data.contribution}

  ## Tests <a name='tests'></a>
  ${data.tests}

  ## Questions <a name='questions'></a>
  Have any questions regarding this project?
  Send me a message on:
  Github: https://github.com/${data.username}
  Email: ${data.email}

  ## Credits <a name='credits'></a>
  ${data.name}
`;
}

module.exports = generateMarkdown;
