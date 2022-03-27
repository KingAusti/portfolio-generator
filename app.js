const inquirer = require('inquirer');

inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
    ])
    .then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio Complete! Checkout the index.html to see the output!')

// });

// 
// console.log(profileDataArgs);
// const printProfileData = profileDataArr => {
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };