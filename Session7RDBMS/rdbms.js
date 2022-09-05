/*//! Relation Database Management System
RDBMS adalah program yang digunakan untuk menampung basis data yang entitas utamanya terdiri dari table table yang mempunyai relasi dari satu tabel ke tabel yang lain.

Suatu database terdiri dari banyak tabel. Tabel ini terdiri dari banyak field yang merupakan kolomnya. Isi tiap baris dari tabel inilah merupakan data.

Untuk membuat sistem basis data yang terintegrasi maka antara satu tabel dengan tabel lain mempunyai hubungan yang harus selalu dipelihara. Setiap tabel mempunyai sebuah primary key, primary key ini kemudian dihubungkan dengan taabel ke dua dan menjadi foreign key untuk tabel kedua. Pembuatan primary key harus unik, artinya primary key baris pertama dengan primary key baris kedua harus berbeda dan begitu seterusnya. 

Dengan relational database ini maka data akan secara konsisten disimpan disuatu tabel, kemudian tabel lain yang membutuhkan data lainnya tinggal menghubungkan melalui foreign key, dan menggunakan datanya.

berbagai macam relasi dalam database: 
1. one to one
2. one to many
3. many to many

//! one to one
table A        table B
data 1 ------->data 1
data 1 ------->data 1
data 1 ------->data 1

Relasi one to one seperti diatas, dengan kata lain, Reslasi one to one terjadi jika ada data pada table A yang juga ada di table B sehingga mereka akan membentuk relasi.
Contoh : 
//? Tabel Mahasiswa
nim   nama   alamat   id_orangtua
1     A       jkt      1    
2     B       jkt      2    
3     C       jkt      3    

//? Tabel Orang Tua
id_orangtua   nama    umur
1             X       50
2             Y       60
3             Z       60

//* bisa dilihat bahwa 1 mahasiswa hanya memiliki 1 id_orangtua. jadi 1 mahasiswa ya 1 orangtua. Tidak mungkin ada 2 atau lebih mahasiswa yang memiliki 1 orangtua (kecuali jika saudara, tapi dalam kasus ini tidak ada saudara sama sekali).

perlu diketahui, //? primary key pada tabel mahasiswa adalah nim. Foreign key-nya id_orangtua.

Primary key pada tabel orangtua adalah //? id_orangtua yang menjadi foreign key di tabel mahasiswa

//! One to Many/ Many to One
Relasi one to many adalah relasi yang terjadi dimana data pada tabel A mempunyai lebih dari 1 edata yang sama pada tabel B. Cth:

//? Tabel Mahasiswa
nim   nama    alamat    id_dosen
1       A     JKT         1
2       B     JKT         2
3       C     JKT         1

//? Tabel Dosen
id_dosen    nama    umur
1           x       50
2           y       60

//* Penjelasan dari tabel diatas bisa dilihat bahwa 1 dosen bisa memiliki lebih dari 1 mahasiswa. Seperti kita lihat mahasiswa dengan nim 1 dan 3 memiliki id_dosen 1. Nah itulah yang disebut dengan reslasi one to many atau many on one

//! Many to Many
Relasi many to many adalah relasi dimana lebih dari 1 data pada tabel A bisa berelasi dengan lebih dari 1 data pada tabel B.

//? Tabel Mahasiswa
nim   nama    alamat    id_matkul
1     A       JKT         1
1     A       JKT         2
1     B       JKT         2
1     B       JKT         1

//? Tabel Matkul
id_matkul   nama_matkul   sks   harga
1           basis data    3     450000
2           keamanan      3     450000

//* dari 2 tabel tersebut bisa kita lihat bahwa 1 mahasiswa bisa mengambil lebih dari 1 matkul. Sedangkan 1 matkul bisa diambil lebih dari 1 mahasiswa. 
*/

/*
RDBMS akan menjaga agar data-data ytang menjadi kunci relasi (foreign key dan primary key) berkaitan satu dengan yang lain. Jika ada data yang salah reslasinya, maka RDBMS akan menolak data tersebut. Ini akan memudahkan pembuat program (software developer) dalam melakukan coding karena dibantu pengecekan secara otomatis oleh RDBMS.

ada yang menarik, //? Jika menggunakan relasi many to many kita biasanya membuat satu buah tabel lagi.
seperti contoh dibawah ini yaitu tabel nilai dari database kampus, untuk menampung foreign key dari tabel-tabel yang memiliki hubungan many to many yaitu tabel_mahasiswa dan tabel_matakuliah.

untuk relasi many to many kita membuat database baru yang bernama kampus yang terdiri dari tabel_mahasiswa, tabel_matakuliah, dan nilai

//* field(kolom) dari tabel_mahasiswa adalah NIM, nama, alamat, tanggal_lahir dengan primary key NIM.

//* field dari tabel_matakuliah adalah kode_matakuliah, nama_matakuliah, sks. dengan primary key kode_matakuliah

untuk tabel nilai kita hanya perlu field Nim, kode_matakuliah, dan nilai. Disinilah Nim dan kode_matakuliah merupakan foreign key untuk tabel_mahasiswa dan tabel_matakuliah
*/