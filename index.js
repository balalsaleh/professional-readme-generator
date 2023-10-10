const inquirer = require('inquirer');
const fs = require('fs');

// questions array for readme
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your questions:',
    },
];

// generating the readme file
function generateReadme(replies) {
    return `

# README

# ${replies.title}

## Description
${replies.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${replies.installation}

## Usage
${replies.usage}

## License
This project is using the ${replies.license} License.

## Contributing
${replies.contributing}

## Tests
${replies.tests}

##Questions

GitHub: [${replies.github}](https://github.com/${replies.github})

For additional questions, you can reach me at ${replies.email}.
`;
}

inquirer.prompt(questions).then((replies) => {
  const readmeContent = generateReadme(replies);

  //writing to the generatedREADME.md file and put in a seperate generated folder
  fs.writeFileSync('./generated/generatedREADME.md', readmeContent);
  console.log('Check inside the generated folder for the generatedREADME.md you have just created');
}) .catch((error) => {
    console.error('An ERROR has taken place', error);
  })
