/* // ! TEKNIK TESTING

//? TDD (Testing Driven Development)

//* biasanya pada testing ini kita bertanya, apalah cara yang kita lakukan ini sudah benar? test ini biasanya digunakan oleh developer?
TDD adalah pengembangan yang disetir oleh Test. mudahnya, kita waji menuliskan test terlebih dahulu baru production codenya. Implementasinya adalah sebagai berikut :
//* sebelum menulis kodem tuliskan test-nya terlebih dahulu. pastikan kita memasukkan semua kemungkinan yang dapat kita pikirkan untuk input dan outputnya.

//* jalankan test-nya, dan pastikan test-nya fail karena belum ada kode apapun untuk membuat test-nya pass

//* Ketik working code seminimum mungkin dengan tujuan agar test-nya pass atau berhasil

//* Jalankan test dan cek apakah test-nya pass, jika belum pass, maka perbaiki working code kita sampai memenuhi ekspektasi dari test.

//* merasa working code yang kita tulis jadi berantakan? jangan khawatir, refactor the code, do some cleaning and DRY-ing. Selama test-nya masih pass, berarti tidak ada masalah dengan kode yang direfactor tersebut.

// ? BDD (Behavior Driven Development)

//* Biasanya pada testing ini, kita akan menanyakan apakah fungsi ini perlu dilakukan test atau tidak? test ini biasanya dilakukan oleh developer, customer, dan seorang tester.

dalam pengembangan suatu sistem ada metodologi yang bernama TDD(Test Driven Development), yaitu metodologi pengembangan dimana kita mengutamakan komponen-komponen yang akan di test untuk membuat suatu sistem yang baik untuk stakeholder atau customer.

tetapi ada juga metodologi lain yang kebalikan dari TDD, yang berfokus kepada "behavior" sebuah sistem, metodologi tersebut adalah BDD(Behavior Driven Development).

//*"Behavior" dalam konteks ini adalah hal hal yang customer harapkan dapat dilakukan oleh suatu sistem. "Behavior" bisa dibilang sebagai kontrak.

PROSES :
//* Membuat serangkain Behavior Test
//* Memastikan bahwa system melewati Behavior Test
//* Melihat jika sistem telah melewati Behavior Test tersebut maka produk sudah bisa.

perlu dicatat bahwa saat kita melakukan pengembangan dengan BDD, maka point utama dari siste, kita adalah behavior test, jika suatu sistem dapat melewati behavior test walau dengan fitur minimalis, maka product sudah dapat di release.

KEUNTUNGAN :
//* Lebih berinteraksi dengan Stakeholder atau Customer
//* Jika suatu function berubah, tidak perlu dilakukan test lagi, selama fungsi tersebut tidak mengubah hasil.
//* BDD dapat dilakukan dengan software apapun yang mirip, berbedan dengan Unit Test.

KELEMAHAN:
Membutuhkan waktu yang lama untuk mengetest sesuatu.
kesulitan dalam melacak akar permasalahan jika terjadi sesuatu.

//? ATTD(Acceptance Test Development)

//* Biasanya pada testing ini kita bertanya apakah kode ini sudah berjalan sesuai yang diinginkan? tujuan: Menguji apakah sistem sudah sesuai dengan apa yang ada didalam spesifikasi fungsional sistem atau belum? | test dilakukan oleh developer dan hasil akan dinilai oleh user.
*/
