const fs = require('fs');

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    switch(license) {
        case 'GNU AGPL v3':
            return '(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)';
        case 'GNU GPL v3':
            return '(https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'GNU LGPL v3':
            return '(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)';
        case 'Mozilla Public License 2.0':
            return '(https://img.shields.io/badge/License-MPL%202.0-orange.svg)';
        case 'Apache License 2.0':
            return '(https://img.shields.io/badge/License-Apache%202.0-green.svg)';
        case 'MIT License':
            return '(https://img.shields.io/badge/License-MIT-brightgreen.svg)';
        case 'Boost Software License 1.0':
            return '(https://img.shields.io/badge/License-Boost%201.0-yellowgreen.svg)';
        case 'The Unlicense':
            return '(https://img.shields.io/badge/license-Unlicense-lightgrey.svg)';
        default:
            return '';
      } 
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
        case 'GNU AGPL v3':
            return 'https://www.gnu.org/licenses/agpl-3.0';
        case 'GNU GPL v3':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'GNU LGPL v3':
            return 'https://www.gnu.org/licenses/lgpl-3.0';
        case 'Mozilla Public License 2.0':
            return 'https://opensource.org/licenses/MPL-2.0';
        case 'Apache License 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'MIT License':
            return 'https://opensource.org/licenses/MIT';
        case 'Boost Software License 1.0':
            return 'https://www.boost.org/LICENSE_1_0.txt';
        case 'The Unlicense':
            return 'http://unlicense.org';
        default:
            return '';
      } 
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
      }
    
    return `[![License: ${license}]${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## License
  ${renderLicenseSection(data.license)}
  ## Description 
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Instructions
  ${data.instructions}
  ## Questions 
  Find me at ${data.username} or contact me at ${data.email} with any additional questions.
`;
}

module.exports = generateMarkdown;
