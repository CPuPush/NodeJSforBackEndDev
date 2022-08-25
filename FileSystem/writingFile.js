/*
writing data menggunakan writeFile
*/

const fs = require('fs');
fs.writeFile('./write.txt', 'Menulis dengan menggunakan write write file', (err) => {
    if(err) return console.error(err);
    
});