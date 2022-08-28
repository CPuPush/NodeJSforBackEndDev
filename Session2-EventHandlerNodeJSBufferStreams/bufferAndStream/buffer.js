/*
untuk menangani binary data, node menyediakan namanya buffer. buffer merepresentasikan penggunaan memori di mesin javascript v8 chrome. banyak cara untuk membuat buffer ini, dan banyak juga cara untuk memanipulasi datanya.
//*data biner adalah jenis data yang direpresentasikan atau ditampilkan dalam sistem bilangan biner. Data biner adalah satu-satunya kategori data yang dapat langsung dipahami dan dieksekusi oelh komputer. ini secara numerik diwakili oleh kombinasi angka nol dan satu 

vanila javascript cukup mudah digunakan tapi dia tidak dibuat untuk menangani binary data. node menyediakan buffer yang menyediakan tempat untuk menyimpan raw data yang bentuknya mirip seperti array integer dan kita bisa menyinpan apa saja ke dalamnya.

Node menyediakan buffer untuk menyimpan raw data (data mentah yang mau dipergunakan)

//! Menyimpan & membaca data buffer
analogi ibaratkan buffer seperti stasiun bus. disuatu stasiun bus tidak diperbolehkan berangkat sampai sejumlah penumpang memenuhi bus atau sampai jam keberangkatan tiba. Sedangkan, kita tidak mengetahui kapan penumpang datang. penuumpang bisa saja datang di jam yang berbeda-beda dengan kecepatan kedatangan yang berbeda-beda pula. Jadi bisa disimpulkan baik penumpang ataupun stasiun bus, dikontrol oleh kedatangan penumpang ke stasiun.

dalam kasus lain, penumpang yang datang lebih dulu harus menunggu sampai bus memutuskan untuk berangkat. sementara penumpang yang tiba ketika bus sudah penuh atau ketika bus sudah berangkat harus menunggu bus berikutnya.

berdasarkan kasus tersebut, selalu ada indikasi harus menunggu. ini sama seperti buffer di nodejs. nodejs tidak bisa mengontrol kecepatan data atau kapan datanya masuk //?(speed of stream)
Yang bisa diprediksi hanya kapan datanya bisa dikirimkan, untuk diproses. Untuk memfasilitasi semua data yang masuk, Node JS menampungnya ke dalam buffer //?( the waiting area ) sampai waktu antrian data tersebut diproses

contoh streaming video
jika koneksi internet cukup cepat, kualitas streamingnya juga ikut cepat untuk mengisi buffer di komputer kita dan mengirimkan datanya untuk diproses ke sistem kita. jika buffer yang sebelumnya sudah diproses, ini buffer lagi, dan kirim untuk di proses lagi. begitu tersu sampai proses streaming selesai.
*/

// buat buffer dengan kapasitas 100 karakter menggunakan allocUnsafe
const buf = Buffer.allocUnsafe(100);

// tulis suatu string ke dalam buffer menggunakan write
const panjang = buf.write('Hallo saya ingin belajar web app');

// yang tampil panjang akarakternya
// console.log(panjang);

// contoh menampilkan alfabet dari buffer

const buffer = Buffer.alloc(26)
for(let i= 0; i < 26; i++){
  // 97 =a di utf8
  buffer[i] = i + 97
};  
console.log(buffer.toString('utf8'));

