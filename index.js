const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is your project title? (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter your project title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project description? (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter your project description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps for installing your project? (Required)',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('Please enter the steps for installing your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are the instructions for using your project? (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter the instructions for using your project!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmContributing',
                message: 'Would you like to add guidelines for how others can contribute to your project?',
                default: true
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please add the guidelines for contributing to your project.',
                when: ({ confirmContributing }) => {
                  if (confirmContributing) {
                    return true;
                  } else {
                    return false;
                  }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Add any tests for your application.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose your project license.',
                choices: ['GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your Github username? (Required)',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your Github username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            }
        ])
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

promptUser()
    .then(markdownData => {
        return generateMarkdown(markdownData)
    })
    .then(markDownContent => {
        return writeFile(markDownContent)
    })
    .catch(err => {
        console.log(err);
    });
