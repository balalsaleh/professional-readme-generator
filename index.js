// Required dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Questions array for gathering project information
const questions = [
    // Prompt for the project title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    // Prompt for the project description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
    },
    // Prompt for installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    // Prompt for usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    // Prompt for choosing a license
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    // Prompt for contribution guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    // Prompt for test instructions
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    // Prompt for the user's GitHub username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    // Prompt for the user's email address to contact you for questions
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Function to generate license badge and notice
function generateLicenseInfo(license) {
    let licenseBadge, licenseNotice;

    switch (license) {
        case 'MIT':
            licenseBadge = '[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
            licenseNotice = 'This project is licensed under the MIT License.';
            break;
        case 'Apache':
            licenseBadge = '[![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
            licenseNotice = 'This project is licensed under the Apache License 2.0.';
            break;
        case 'GPL':
            licenseBadge = '[![GPL License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            licenseNotice = 'This project is licensed under the GNU General Public License (GPL) version 3.';
            break;
        case 'None':
            licenseBadge = ''; 
            licenseNotice = 'This project is not licensed.';
            break;
        default:
            licenseBadge = '';
            licenseNotice = '';
    }

    return { badge: licenseBadge, notice: licenseNotice };
}

// Function to generate the content of the README file
function generateReadme(replies) {
    // Generate license info
    const { badge, notice } = generateLicenseInfo(replies.license); 

    return `
# ${replies.title}

${badge}

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
${notice}

## Contributing
${replies.contributing}

## Tests
${replies.tests}

## Questions

My GitHub: [${replies.github}](https://github.com/${replies.github})

For additional questions, you can reach me at ${replies.email}.
`;
}

// Prompt the user with questions, generate the README, and save it to a file
inquirer.prompt(questions).then((replies) => {
    const readmeContent = generateReadme(replies);

    // Write the generated README content to a file and place it in a separate "generated" folder
    fs.writeFileSync('./generated/generatedREADME.md', readmeContent);
    console.log('Check inside the generated folder for the generatedREADME.md you have just created');
}).catch((error) => {
    console.error('An ERROR has taken place', error);
});
