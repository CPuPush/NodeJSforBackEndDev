/*
stream memungkinkan membaca data dari suatu sumber atau menulis data ke suatu sumber atau menulis data ke suatu tujuan dengan gaya continuous, artinya selama masih ada data, maka stream akan terus dilakukan
//?speed: sangat lambat karena harus memuat semua request
//?buffer limit : 1 GB
//*keuntungan menggunakan stream adalah tidak perlu menunggu semua data dimuat

biasanya stream digunakan untuk:
1. HTTP request & response
2. Standard input atau output (stdin & stdout)
3. membaca dan menulis file

//!piping di stream
Piping adalah proses dimana suatu output stream akan dijadikan inputan pada stream yang lain. Biasanya digunakan untuk mengambil data dari satu strea,. dan mengirimkan datanya ke stream yang lain.
tidak ada batasan berapa banyak data yang bisa di piping.
*/

