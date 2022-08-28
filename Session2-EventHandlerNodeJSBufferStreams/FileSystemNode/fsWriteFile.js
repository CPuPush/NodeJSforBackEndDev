/*
//*fs.writeFile() untuk membuat dan menulis file. 
*/

const fs = require('fs');
fs.open('buatbarulagi.txt', 'w+', (err, file) => {
  if (err) throw err;

  // kontent yang akan kita tulis ke file
  let contents = 'Hello saya student di hacktiv8 online program, this is writeFile bro';

  // tulis content ke file
  fs.writeFile(file, contents, (err) => {
    if(err) throw err;
    console.log('sukses thrid');
  });

  // baca file
  fs.readFile(file, (err, data) => {
    if (err) throw err;

    console.log(data.toString('utf-8'));
  });
});