/*//! Create & Delete Database
-- create Database
create database db_gorengan;
-- delete Database
drop database db_gorengan;

=> untuk drop database we should to disconnect by right click in database and choose disconnect.






//! Insert & Update Data Table


//! Primary Key Foreign Key


//! On Delete Restrict, On Delete Cascade
/* on delete restric berguna untuk tidak dapat dihapus pada induk tabel ketika di relation tabel lain sudah di inisialisasi atau sudah dipesan contohnya.

on delete cascade, ketika pada induk table , record dihapus, maka record pada relation tabel lain yang terhubung ke induk table tersebut akan ikut terhapus.
*/
//! Where Clause & operator perbandingan
/*
kita bisa melakukan penjacarian penghapusan dengan where clause. 
operator pada postgress //* =, != (<>), >, <, 
*/
//! Group By, Having, Order By Clause
/*
order by biasanya mengurutkan dari ascending atau descending
//* select nama, gaji from tb_cashier order by gaji asc;


*/

//! Check Constraints
