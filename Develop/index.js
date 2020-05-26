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
        type: 'list',
        name: 'table',
        message: 'List the Table of Contents?'
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username?"
      },
      {
        type: "text",
        name: "license",
        message: "What is the License for this Project?"
      },
      {
        type: "text",
        name: "installation",
        message: "What are the Installation Instructions?"
      },
      {
        type: "text",
        name: "instructions",
        message: "What are the Instructions to Test the Project?"
      },



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
    
    
    
