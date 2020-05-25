const fs = require ('fs');
const generatePage = require ('./utils/generateMarkdown.js');
const inquirer = require ('inquirer');



const questions = [
    {
        type: 'text',
        name: 'title',
        message: 'What is the Name of the Project?'
      },
      {
        type: 'text',
        name: 'description',
        message: 'Describe the Project?'
      },
      {
        type: 'text',
        name: 'table',
        message: 'List the Table of Contents?'
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }



];

function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'File created!'
            });
        });
    });
};

function init() {
    return inquirer.prompt(questions)
};

init()

.then(initData => {
    return generatePage(initData);
})
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    })

    ;
    
    
    
