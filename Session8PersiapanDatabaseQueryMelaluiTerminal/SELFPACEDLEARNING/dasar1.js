/*//! TIPE DATA PostgreSQL
//* Numerik
Berupa angka saja, integer, small int
//?smallint, integer. 
create table tb_test(
testing smallint => testing adalah 
);
=> memasukkan value ke testing {
  insert into tb_test values (32769);
}
kapasitas maksimum dari tipe data smallint adalah 32767. jika melebihi 32767 maka ada error smallint out of range.

integer => hampir sama dengan smallint tetapi lebih banyak kuotanya. 
insert into tb_test values (2147483647); => 2147483647 adalah jumlah maximal yang ditanggun ginteger

numeric adalah diperuntukkan untuk tipe data decimal

real, sama seperti decimal/numeric tetapi kuota lebih banyak
//* Karakter
Berupa karakter
tipe data dengan text tidak memiliki batasan, tetapi karakter memiliki batasan. 

//* Mata Uang
Postgres menyediakan tipedata yang nantinya bisa diisi oleh mata uang, satuannya dolar

//* Enumeration
digunakan untuk sesuatu yang sudah pasti, sudah ditetapkan, ex jenis kelamin.
enumeration bertipe data case sensitive. 


//* Geometri
Biasanya untuk perhitungan gis, geografis, perhitungan sistem, lingkaran point, line, poligon.

//? point
(x,y) => (2,3)

//? line => baris
(x1,y1)(x2,y2) => 

//? polygon

//?circle


//* JSON
disediakan tipe data yang menyimpan JSON









*/