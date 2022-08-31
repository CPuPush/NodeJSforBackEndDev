/*
membuat keputusan di restoran
1. menentukan dimana penggan duduk
2. menerima pesanan makanan
3. memberikan struk, bill atau bon ketika penggan selesai makan
Sebelum kita menentukan dimana pelanggan duduk, kita butuh tau :
1. apakah pelanggan menggunakan kemeja atau sepatu, jika tidak pelanggan tidak dipersilahkan duduk
2. Jika pelanggan mau duduk di bar, pelanggan harus berusia minimal 21 thaun

bar di restoran kita bukan bar yang boleh dimasuki oleh pelanggan di bawah umur. sama seperti kode yang akan kita buat, kita perlu memvalidasi apakah pelanggan memnuhi kriteria sebelum melanjutkan ke tahap berikutnya. Sebagai contoh, ketika pelanggan mencoba login ke dalam website:
1. apakah pelanggan mempunyaii akun?
2. apakah pelanggan memasukkan password yang benar?

//*fungsi middleware memperbolehkan kita untuk memanipulasi request yang masuk sebelum dikirim kembali menggunakan response.

kita membutuhkan beberapa aturan untuk menentukan dimana pelanggan duduk. contoh misalnya ada pasangan datang ke restoran, kita mempunyai satu aturan sebelum mempersilahkan mereka duduk:
1. apakah mereka menggunakan kemeja dan sepatu

code:

app.use((req, res, next) => {
  let shirt =req.shirt;
  let shoes = req.shoes;
  if(shirt && shoes) {
    next()
  }
});

app.use() => berarti bahwa kita membuat aturan baru yang perlu diterapkan untuk routes yang akan datang berikutnya. ingat USE, bukan GET POST PUT DELTE

we need next() for continue the next function. 

kode diatas kehilangan bagian yang penting, yaitu path. Path adalah spesifik string yang dimasukkan bersamaan dengan request. jika kita tidak menggunakan path, maka kita akna menjalankan kode di setiap reqest middelware yang juga tidak memiliki path.
sama halnyba ketika pelanggan memasuki restoran, memesan makanan, dan meminta bill, karyawan restoran akan memaksa pelanggan untuk diperhatikan dari atas ke bawah, untuk memastikan mereka berpakaian! thas is a quick way to go out of businnes.

app.use(('/table')(req, res, next) => {
  let shirt =req.shirt;
  let shoes = req.shoes;
  if(shirt && shoes) {
    next()
  }

//* app.use => create rules, not routes,
//* '/table' => only for the table path
//* req => User request
//* next => Able to move on to next function

*/

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('always running');
  next();
});

app.use('/tambah-produk', (req, res, next) => {
  console.log('Middleware lainnya! (tambah produk)');
  res.send('<h1>Halaman Tambah produk</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Middleware lainnya (Express)');
  res.send('<h1>express</h1>')
});

app.listen(3000);