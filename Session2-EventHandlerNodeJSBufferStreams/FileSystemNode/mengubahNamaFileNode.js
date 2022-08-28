/*
pada module fs terdapat fungsi rename() untuk mengubah nama 
//*fungsi ini memiliki 3 params :
1. nama file
2. nama baru
3. fungsi yang akan dieksekusi saat nama diubah.
*/
const fs = require('fs');

fs.rename('buatbaru.txt', 'rubahnama.txt', (err) => {
  if (err) throw err;
  console.log('Nama file telah diubah');
});
