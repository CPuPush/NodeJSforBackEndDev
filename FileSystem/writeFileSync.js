const fs = require('fs');

let data = 'this is the text to try writeFileSync'

try{
    fs.writeFileSync('./writeSync.txt', data, {mode:0o755})
}catch(err){
    console.log(err);
}