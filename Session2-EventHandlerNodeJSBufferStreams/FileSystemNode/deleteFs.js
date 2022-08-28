/*
modul fs memiliki fungsi unlink() untuk menghapus file. Fungsi memiliki 2 parameter
1. nama fila yang akan dihapus
2. fungsi yang akan dieksekusi saat file dihapus
*/

const fs = require('fs');

fs.unlink('rubahnama.txt', (err) => {
  if(err) throw err;
  console.log('File had been deleted');
});