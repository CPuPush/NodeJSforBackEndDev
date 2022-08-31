/*
Untuk menyajikan file statis seperti gambar, file CSS, dan file jS, gunakan fungsi middleware bawaan //?express.static di Express
//*express.static(root, [option])

parameter root menentukan direktori atau folder root tempat menyimpan aset statis.
app.use(express.static('public'));

setelah itu kita dapat memasukkan file yang ada pada direktori public, contoh :
http://localhost:3000/img/logo.svg

express mencari file yang berhubungan dengan direktori statis, sehingga nama direktori statis bukan bagian dari URL. Untuk menggunakan beberapa direktori aset statis, panggil fungsi middleware express.static diikuti dengan lokasi penyimpanan (public & files) beberapa kali :

app.use(express.static('public'));
app.use(express.static('files'));

express mencari file dalam urutan sesuai dengan bagaimana kita mengurutkan direktori statis dengan middleware express.static. Berarti jika melihat conoth diatas, express akan mencari di folder public dulu, baru setelah itu folder files.

//* untuk hasil yang lebih baik, teman-teman bisa menggunakan cache proxy 'terbalik' untuk meningkatkan kinerja penyajian aset statis.

untuk membuat awalan virtual path (dimana path sebenarnya tidak ada dalam sistem file sama seperti ketika kita membuat route) untuk file yang mau diambil oleh fungsi express.static, pertama-tama tentukan dulu path mount untuk direktori statis, seperti contoh: dibawah ini, path mount-nya adalah static untuk folder public. 
app.use('/static', express.static('public'));
//* setelah itu kita dapat langsung mengambil file yang ada di folder public dengan menambahkan /static sebelum nama file, seperti berikut :
http://localhost:/static/img/logo.svg

app.use('/static', express.static(path.join(__dirname, 'public')));
hal di atas dilakukan demi mepercepat kinerja pengambilan aset atau file didalam folder tertentu.

namun  path yang kita jalankan di express.static hanya bisa diakses oleh folder tempat kita menjalankan aplikasi express saja. Sehingga jika kita menjalankan aplikasi express dari folder lain, kita tidak bisa langsung mengambil asetnya.

Untuk mengatasi itu, lebih baik kita menggunakan absolute path dari folder tempat kita menyumpan aset, supaya kita bisa memanggil folder aset kita, yang berisi aset dari manapun secara global.

//*app.use("/static", express.static(path.join(__dirname, "public")));


*/


