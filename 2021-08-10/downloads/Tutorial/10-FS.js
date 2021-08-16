const fs = require('fs');

fs.mkdirSync('testfolder4');
console.log(`Displayed after creation!`);

/*
const fs = require('fs');

fs.mkdir('testfolder4', function (err) {
    if (err) {
        throw(err);
    } else {
        console.log('Directory created')
    }
});
console.log(`Likely displayed first!`);
*/
