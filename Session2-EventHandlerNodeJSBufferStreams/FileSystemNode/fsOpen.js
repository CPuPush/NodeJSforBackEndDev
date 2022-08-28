/*
//* untuk membuat, membuka, dan menulis file. kemudian fungsi atau method berikutnya adalah fs.open().
fungsi ini berguna untuk membuka dan menulis file.
sama sepertri sebelumnya
*/
const fs = require('fs');
fs.open('buatbarulagi.txt', 'w', (err, file) => {
  if(err) throw err;
  console.log('Second Success');
});

/*
fungsi //?fs.open() memiliki 3 params
nama file, flag, callbsck function

r buka file untuk dibaca, jia file tidak ada maka terjadi error
r+ buka file untuk dibaca dan ditulis. apabila file tidak ada maka akan terjadi error
fs buka file untuk dibaca dalam mode synchronous
fs+ buka file untuk dibaca dan ditulis dalam mode synchronous
w buka file untuk ditulis
wx sama seperti w, tapi error jika suda ada filenya,
w+ buka file untuk ditulis dan dibaca
wx+ sama seperti w+ tapi akan error jika sudah ada filenya
a buka file untuk diisi.
ax sama seperti a tapi akan error jika sudah ada file-nya
a+ nia file untuk diisi.
ax+ sama seperti a+ tapi akan error jika suda ada filenya

*/