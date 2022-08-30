/*
Merekrut General Manager a.k.a Express
pastikan kita merekrut general manager terlebih dahulu 
const express = require('express);
//* const app = express();

Mengatur routing
awalnya manager tidak tahu bagaimana caranya mengarahkan pelanggan ke meja dan mempersilahkan duduk.
//* disinilah peran routing, Routing memungkinkan untuk membuat kode tindakan spesifik berdasarkan path.

app.get('/table/:amount', (req, res) => {
  let party =req.params.amount
  res.send('We are searching for your table for ' + party + '!')
});
//?:amount berarti nantinya akan diisikan dengan jumlahpelanggan yang masuk ke dalam resoran

let party = req.params.amount
kita mengambil jumlah orang dari parameter objek request. jika /:amount diisi /2, hasilnya akan terbaca seperti berikut
req = {
  params: {
    amount: 2
  }
}

//! Routing Option
Selain GET, opsi lainnya untuk routing adalah POST, PUT, DELETE.

dalam konteks restoran, kita perlu membuat permintaan GET untuk memilih meja tertentu dan tempat duduk para pelanggan. GET tidak mengubah atau menambah ke kita punya database. Tetapi, GET hanyua mengambil informasi berdasarkan parameter tertentu.
Sedangkan POST, Biasanya digunakan untuk menangani informasi yang dikirimkan oleh form di html ke dalam express.

*/


