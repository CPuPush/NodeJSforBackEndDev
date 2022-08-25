/*
stream => sequence data yang dipindahkan dari satu data ke tempat lainnya.
dimana data tersebut sudah disimpan didalam buffer dan siap untuk dikirimkan
*/

// READING FILE
const fs = require('fs');
let data = '';

let readerStream = fs.createReadStream('kode.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function() {
    console.log(err.stack);
});

console.log('Program ended');
/*

*/