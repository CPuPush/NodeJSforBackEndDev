/*
watchingFile == memonitoring file
build in object yang hampir sama dengan read, dengan bisa melihat perubahan yang ada didalam file
*/
const fs = require('fs');

const watcher = fs.watch('./kode.txt');

watcher.on('change', function(event, fileName) {
    console.log(`${event} in ${fileName}'s file`);
});