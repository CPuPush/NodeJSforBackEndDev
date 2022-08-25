// pipping
/*

*/
const fs = require('fs');
let readerStream = fs.createReadStream('kode.txt');

let writeStream = fs.createWriteStream('output.txt');

//?melakukan piping dari kode.txt
readerStream.pipe(writeStream);

console.log('program ended');