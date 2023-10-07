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
        type: 'input',
        name: 'license',
        message: 'Choose a license for your project:',
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
## Description
${replies.title}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installkation
${replies.installation}

## Usage
${replies.usage}

## license
This project is using the ${replies.license} License.

## Contributing
${replies.contributing}

## Tests
${replies.tests}

##Questions
This is my git hub ${replies.github}
For additional questions, you can email me at: ${replies.email}.
`;
}

inquirer.prompt(questions).then((replies) => {
  const readmeContent = generateReadme(replies);

  //writing to the generatedReadME.md file and put in a seperate generated folder
  fs.writeFileSync('./generated/generatedReadME.md', readmeContent);
  console.log('Check inside the generated folder for the generatedReadME.md you have just created');
});
