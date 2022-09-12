/*
Template Engines memungkinkan kita untuk dapat menggunakan file template statis di aplikasi yang kita buat. saat runtime, Template Engines menggantikan variabel dalam file template dengan nilai akurat, dan mengubah template menjadi file HTML yang dikirim ke client. Pendekatan ini memudahkan kita untuk mendesain halaman HTML.
beberapa template Engines populer yang dapat bekerja dengan Express adalah PUG, Moustache, dan EJS. Generator aplikasi Express menggunakan jade sebagai standartnya, tetapi juga mendukung beberapa lainnya.

//* Jade telah diubah namanya menjadi Pub. Kita dapat tetap menggunakan Jade dalam aplikasi kita dan berjalan dengan baik. tetapi apabila kita ingin melakukan update atau pembaharuan versi, kita baru akan diminta untuk mengganti jade dengan pub pada aplikasi yang dibuat.

Untuk membuat template files, kita harus mengatur properti pada pengaturan aplikasi pada file app.js yang secara default dibuat oleh generator.
//* 1. View: Direktori tempat template files berada: contoh app.set('views', './views'). secara defailt mengarah ke direktori. 
//* 2. View Engine: Template engine yang digunakan. Contohnya jika ingin menggunakan template engine Pub maka bisa menuliskan: app.set('view engine', 'pug').

Template Engine yang sesuai dengan Express seperti Jade dan Pug mengekspor fungsi bernama __express (filepath, option, callback), yang dipanggil oleh fungsi res.render() untuk membuat kode template bekerja.
Setelah view engine sudah kita atur, maka kita tidap perlu menentukan engine dan modul mana yang digunakan di aplikasi kita, Express nantinya akan membuat modul secara internal seperti contoh
app.set('view engine', 'pug')

//* Jika properti view engine tidak diatur, maka kita harus menentukan ekstensi file tampilan (view). Jika tidak, maka kita juga bisa menghilangkannya. 
*/

/*
//?Question
1. Generator itu apa?
*/
const express = require('express');
const app = express();
// const pug = require('pug')

// middleware
app.set('view engine', 'pug');

// routing
app.get('/', (req, res) => {
  // render butuh template engine
  res.render('index', { title:'hey', message: 'hello there!' });
});

app.listen(3000, () => {
  console.log(`listening at http://localhost:3000`);
})