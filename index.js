var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instruction for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "tests"
    },
    {
        type: "list",
        message: "Please select a license:",
        name: "license",
        choices: [
            'MIT', 
            'GNU',
            'Apache',
            'BDS'
        ]
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address for contacts:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
            return console.log(err);
        }
    
        console.log("Your readme file has been created in the Generate folder.");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response) {
        var title = response.title;
        var description = response.description;
        var installation = response.installation;
        var usage = response.usage;
        var contribution = response.contribution;
        var tests = response.tests;
        var license = response.license;
        var github = response.github;
        var githubLink = "https://github.com/" + github;
        var email = response.email;
        
        var README = "License: " + license + // License
        "\n \n# " + title + // Title
        "\n \n ## Description \n" + description + // Description
        "\n \n# Table of Contents \n- [Installation](#installation) \n- " + // Table Of Contens
        "[Usage](#usage) \n- [Contribution](#contribution) \n- " + 
        "[Tests](#tests) \n- [License](#license) \n- [Questions](#questions) \n \n" + 
        "## Installation \n" + installation + // Installation
        "\n \n## Usage \n" + usage + // Usage
        "\n \n## Contribution \n" + contribution + // Contribution 
        "\n \n## Tests \n" + tests + // Tests
        "\n \n## Questions \nIf you have any questions feel free to contact: \n" + // Questions & Contact
        "[GitHub](" + githubLink + ") \n[" + email + "](" + email + ")"; 

        if (fs.existsSync("Generate/README.md")) {
            inquirer.prompt([
                {
                    type: "list",
                    message: "It looks like you already have a README.md file generated in the Generate folder. Are you sure you want to overwrite it?",
                    name: "overwrite",
                    choices: [
                        'Yes', 
                        'No'
                    ]
                },
            ]).then(function(response) {
                var UserResponse = response.overwrite;
                if (UserResponse == "Yes") {
                    writeToFile("Generate/README.md", README);
                } else {
                    console.log("Your README.md file in the Generate folder has not been overwritten! Please save your changes in that file somewhere else and try again.")
                }
            });
        } else {
            writeToFile("Generate/README.md", README);
        }
    });

}

// function call to initialize program
init();
