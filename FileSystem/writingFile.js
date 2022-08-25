/*
writing data menggunakan writeFile
*/

const fs = require('fs');

let writes = 'this is the text that add to write.txt file'
fs.writeFile('./write.txt', writes, (err) => {
    if(err) return console.error(err);
});