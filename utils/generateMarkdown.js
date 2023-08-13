const fs = require('fs');
// If there is no license, return an empty string. Ternary operator evaluates if there is no license, it will be an empty string. if there is one, it will render license badge
function renderLicenseBadge(license) {
  return (license ==='No License')?'':`[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
}

// If there is no license, return an empty string. Put it in a switch case to evaluate license. Defaults to empty string if there are no matches for cases. 
function renderLicenseLink(license) {
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

// If license if strictly equal to 'No License' that we asked in inquirer, returns an empty string
function renderLicenseSection(license) {
  return (license ==='No License')?``:`
  This project is using the ${license} license. To learn more, please click the license link listed above.`
}

//markdown is generated and we pass in all of the data that we collected from inquirer to create the readme file 
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

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

  ## Licenses <a name='license'></a>
  ${renderLicenseSection(data.license)}

  ## Contribution <a name='contribution'></a>
  ${data.contribution}

  ## Tests <a name='tests'></a>
  ${data.tests}

  ## Questions <a name='questions'></a>
  Have any questions regarding this project?
  Send me a message on...
  Github: https://github.com/${data.username}
  Email: ${data.email}

  ## Credits <a name='credits'></a>
  ${data.name}
`;
}

module.exports = generateMarkdown;
