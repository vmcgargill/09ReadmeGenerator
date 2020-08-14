var inquirer = require("inquirer");
var fs = require("fs");
// var licenseBadge = require('./license')

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
            'Apache 2.0 License', 
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'CC0',
            'Attribution 4.0 International',
            'Attribution-ShareAlike 4.0 International',
            'Attribution-NonCommercial 4.0 International',
            'Attribution-NoDerivates 4.0 International',
            'Attribution-NonCommmercial-ShareAlike 4.0 International',
            'Attribution-NonCommercial-NoDerivatives 4.0 International',
            'Eclipse Public License 1.0',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'IBM Public License Version 1.0',
            'ISC License (ISC)',
            'The MIT License',
            'Mozilla Public License 2.0',
            'Attribution License (BY)',
            'Open Database License (ODbL)',
            'Public Domain Dedication and License (PDDL)',
            'The Perl License',
            'The Artistic License 2.0',
            'SIL Open Font License 1.1',
            'Unlicensed',
            'The zlib/libpng License'
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
        var badge;

        switch(license) {
            case 'Apache 2.0 License':
                badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case 'Boost Software License 1.0':
                badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
                break;
            case 'BSD 3-Clause License':
                badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case 'BSD 2-Clause License':
                badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                break;
            case 'CC0':
                badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
                break;
            case 'Attribution 4.0 International':
                badge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
                break;
            case 'Attribution-ShareAlike 4.0 International':
                badge = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
                break;
            case 'Attribution-NonCommercial 4.0 International':
                badge = "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
                break;
            case 'Attribution-NoDerivates 4.0 International':
                badge = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
                break;
            case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
                badge = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
                break;
            case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
                badge = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
                break;
            case 'Eclipse Public License 1.0':
                badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
                break;
            case 'GNU GPL v3':
                badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case 'GNU GPL v2':
                badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
                break;
            case 'GNU AGPL v3':
                badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
                break;
            case 'GNU LGPL v3':
                badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
                break;
            case 'GNU FDL v1.3':
                badge = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
                break;
            case 'IBM Public License Version 1.0':
                badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
                break;
            case 'ISC License (ISC)':
                badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                break;
            case 'The MIT License':
                badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case 'Mozilla Public License 2.0':
                badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;
            case 'Attribution License (BY)':
                badge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
                break;
            case 'Open Database License (ODbL)':
                badge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
                break;
            case 'Public Domain Dedication and License (PDDL)':
                badge = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
                break;
            case 'The Perl License':
                badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
                break;
            case 'The Artistic License 2.0':
                badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
                break;
            case 'SIL Open Font License 1.1':
                badge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
                break;
            case 'Unlicensed':
                badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
                break;
            case 'The zlib/libpng License':
                badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
                break;
          }
        
        var README = badge + // License Badge
        "\n \n# " + title + // Title
        "\n \n ## Description \n" + description + // Description
        "\n \n# Table of Contents \n- [Installation](#installation) \n- " + // Table Of Contens
        "[Usage](#usage) \n- [Contribution](#contribution) \n- " + 
        "[Tests](#tests) \n- [License](#license) \n- [Questions](#questions) \n \n" + 
        "## Installation \n" + installation + // Installation
        "\n \n## Usage \n" + usage + // Usage
        "\n \n## License \n" + license + // License Section
        "\n \n## Contribution \n" + contribution + // Contribution 
        "\n \n## Tests \n" + tests + // Tests
        "\n \n## Questions \nIf you have any questions feel free to contact: \n \n" + // Questions & Contact
        "[GitHub](" + githubLink + ") \n \nEmail: [" + email + "](mailto:" + email + ")"; 

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
