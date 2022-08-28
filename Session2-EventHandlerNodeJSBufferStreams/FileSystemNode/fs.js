/*
File System memungkinkan kita untuk mengakses file system. modul file system digunakan untuk 
1. Baca file
2. Tulis file
3. Merubah nama file.
4. Hapus file
//*method yang digunakan untuk membaca file adalah fs.readFile() dengan syarat adalah file HTML berada dalam satu folder dengan file JS-nya.

method readFile() adalah method yang digunakan untuk membaca file yang memiliki 2 paramter:
1. Nama file
2. Fungsi (yang akan dieksekusi saat file dibaca)
*/
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  // readfile
  fs.readFile('tiana.html', (err, data) => {
    if(err) throw err;

    // send respon
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end()
  });
}).listen(8080);

console.log(`server running on http://localhost:8080`);