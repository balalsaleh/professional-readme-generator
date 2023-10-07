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
# ${replies.title}
# ${replies.description}
# ${replies.installation}
# ${replies.usage}
# ${replies.license}
# ${replies.contributing}
# ${replies.tests}
# ${replies.github}
# ${replies.email}
# ${replies.questions}
`;
}

inquirer.prompt(questions).then((replies) => {
  const readmeContent = generateReadme(replies);

  //writingto the README.md file
  fs.writeFileSync('generatedReadME.md', readmeContent);
  console.log('generatedReadME.md created');
});
