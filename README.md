# README Generator
https://user-images.githubusercontent.com/15278020/131204157-4a3d35e6-02cf-4a33-8faf-131e6cfbc623.mp4

## Description
The README Generator is a command-line application that generates a README file for a project. It uses [Inquirer](https://www.npmjs.com/package/inquirer) to ask a series of questions to populate the README file. The README includes the title of the project and the following sections: Description, Table of Contents, Installation, Usage, Contributing, Tests, License, and Questions.

Information entered for the description, installation instructions, usage information, contribution guidelines, and test instructions will be added to the README file for the corresponding sections. Choosing an application license will generate a license badge from [shields.io](https://shields.io) and add a line to the License section of the README. If the user chooses to add contributing information, the application will ask for contributing guidelines. Otherwise, that section will not be shown in the generated file. If the user chooses not to enter any test information, that section will not also not be shown in the README. When the application prompts for the user's Github and email address, that information will be added to the Questions section with links to the user's Github account and email.

The application will generate a Table of Contents after the description that will anchor link to the Installation, Usage, Contributing (if it exists), Tests (if it exists), License, and Questions sections.

## Usage
You will need to have [Node](https://nodejs.org/en/) installed. Then install [Inquirer](https://www.npmjs.com/package/inquirer):
```
npm i inquirer
```
To run the application, type:
```
node index
```
A README file will be generated in the `dist` folder. View the current folder for an example README.
