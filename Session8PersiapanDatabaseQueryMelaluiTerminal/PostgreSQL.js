/*
Sebuah relation database managemen system (RDBMS) yang dikembangkan oleh tim relawan yang ada di seluruh dunia yang bersifat open source, artinya siapa saja bisa mengembangkannya. PostgreSQL tidak dikelola oleh perusahaan atau badan swasta lainnya, sehingga source code (kode program), yang tersedia bisa didapatkan secara gratis.

Perbedaan paling mendasar antara postgres(sebutan untuk postgreSQL) dengan sistem relational standar adalah kemampuan postgres yang memungkinkan user untuk mendefinisikan SQL-nya sendiri, terutama untuk pembuatan function.

fitur-fitur dari postgres:
//* 1. Point-in-time recovery
mengizinkan server terus-menerus diback-up sehingga seandainya sebuah disk drive gagal bekerja, database dapat dikembalikan di titik dimana kegagalan itu terjadi.

//* 2. Savepoints
Berguna bagi database developer yang membutuhkan penanganan error dalam transaksi yang kompleks, yaitu suatu fitur yang mengizinkan suatu bagian tertentu dari transaksi database untuk dibatalkan tanpa mempengaruhi sisa transaksi yang lain.

//* 3. Tablespaces
Berguna untuk memilih disk mana yang harus digunakan untuk menyimpan database, schema, table, atau index. Sehingga kinerja PostgreSQL dalam menangani database raksasa berukuran ratusan gigabyte sampai puluhan terabyte dapat tetap terjaga.

//* 4. inheritance = pewarisan
Mewariskan objek yang dimiliki kepada objek yang diturunkan, dan bersifat menyeluruh. kelas yang mewarisi biasa disebut super class/class induk. kelas yang diwariksan biasanya disebut sub class/kelas anak

//* 5. Help
Digunakan untuk melakukan pencarian. Help pada fitur PostgreSQL memberikan hasil yang sangat akurat, selain itu fitur helpnya juga dilengkapi dengan berbagai screenshot yang sangat memudahkan.

//* 6. Rule
Tindakan custom yang bisa kita definisikan dieksekusi saat sebuah tabel di-insert, update atau delete. Selain itu sistem rule ini memungkinkan kita mengendalikan bagaimana data kita diubah atau diambil. 

//* OO
Fitur OO seperti pewarisan tabel dan tipe data, atau tipe data array yang kadang praktis untuk menyimpan banyak data di dalam satu record. Dengan adanya kemampuan OO ini maka di PostgreSQL, kita dapat mendefinisikan sebuah tabel yang mewarisi definisi tabel lain. 
*/