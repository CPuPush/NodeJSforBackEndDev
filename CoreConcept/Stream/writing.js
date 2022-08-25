const fs = require('fs');
let data = 'THis is new data with writestream';

let writeStream = fs.createWriteStream('kode.txt');

writeStream.write(data, 'utf-8');

writeStream.end();

// handling
writeStream.on('finish', function() {
    console.log('Write completed');
});
writeStream.on('error', function() {
    console.log(err.stack);
});

console.log('program ended');