// fs => module file system
//? membatu untuk bekerja dengan file dan mengoperasikan file
/*
fs => 
1. asyn and sync

*/
const fs = require('fs');

fs.readFile('./index.html', {encoding : 'utf8'}, (err, content) => {
    // do something
    if(err) return console.log(err);

    console.log(content);
});

// synchronous
// const data = fs.readFileSync('/path/to/file')