const fs = require('fs');
let buffer = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f]);

fs.writeFile('./bufWrite.txt', buffer, function(err) {
    if(err) return console.error(err);
});