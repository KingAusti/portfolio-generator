const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);

    console.log('Portfolio Complete! Checkout the index.html to see the output!')

});

// 
// console.log(profileDataArgs);
// const printProfileData = profileDataArr => {
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };