/*
Selain untuk membaca file, module fs juga digunakan untuk membuat file baru. terdapat beberapa method yuang dapat digunakan untuk membuat file.
//* fs.appendFile() untuk membuat dan mengisi file; Metode fs.appendFile() menambahkan konten yang ditentukan ke file. jika file tidak ada, file akan dibuat!
*/
const fs = require('fs');
// sintaks uuntuk membuat file bernama buatbaru.txt
fs.appendFile('buatbaru.txt', 'Belajar KODE HACKTIV8', (err) => {
  if (err) throw err;
  console.log('Sukses Dibuat!');
});
