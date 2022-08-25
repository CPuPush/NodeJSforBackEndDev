//! pipping and chaining
const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('kode.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('kodest.txt'));

console.log('file compressed');
/*
//? zlib is used to compress file

*/
// decompressed kode.txt.gz
// fs.createReadStream('kode.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('kodest.txt'));

// console.log('file compressed');
