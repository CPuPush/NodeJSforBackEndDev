/*
expressJS adalah framework dari NodeJS yang dirancang secara fleksibel dan sederhana untuk membantu tahap pengembangan aplikasi back end. ExpressJS juga sangat berbeda dengan framework laravel, dimana library ini memberikan kebebasan bagi para developer untuk mendesign aplikasi, sehingga memungkinkan bagi setiap pengembang memiliki rancangan arsitektur yang berbeda dalam siftware yang dibangun.
ada 4 bagian penting dalam pengembangan :
1. the require statements
2. middleware
3. routing
4. App.listen() atau memulai server

//! Server File
pertama anda dapat membuat proyek sederhana pada server file dengan memakai modul HTTP
//* - middleware
bentuk functionalitas dari express JS sangat dibantu oleh middleware yang merupakan fungsi asinkron. Dimana, mampu mengubah hasil request dan respon di dalam sebuah server. Untuk dapat menginstall modul ini, dapat mengetikkan perintah npm install morgan --save
//* - Akses Server
untuk menjalankan server file yang bersifat statik, anda dapat mengetikkan perintah node app.js dan kemudian dapat meletakkan file apa saja pada direktori anda. selanjutnya and adapat mengakses server dengan pengetikkan localhost pada browser

//! Server Rest
cara kerja yang kedua , express js juga dapat digunakan untuk kebutuhan aplikasi Restful atau Representational State Transfer, merupakan arsitektur yang dimanfaatkan untuk mengembangkan desain aplikasi network. Aplikasi Restful sendiri memakai request HTTP untuk melakukan operasi CRUD (create read update and delete)
Keuntungan lain dari pemanfaatan Restful ini adalah kita membangun berbagai macam teknologi client - side seperti pada website, mobile, ataupun dekstop
*/
const express = require('express');
const app = express();

app.use((req, res, next) => {
  // console.log('request : ', req);
  // console.log('response : ', res);
  next();
});

app.get('/test/:id', (req, res) => {
  const id = req.params.id;
  console.log(id+id);
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`contoh server berjalan di port 3000`);
});