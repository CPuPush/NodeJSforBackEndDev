const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// sementara anggap variabel db ini sebagai sumber
let data = {
  user: 'fauzan',
  passw : 'tianacantika'
}
// routing for jwt
app.get('/', (req, res) => {
  res.send('selamat datang di integrasi JWT Tiana')
});
// verif with middleware
function verifikasi (req, res, next) {
  let getHeader = req.body['auth'];
  if(typeof getHeader !== 'undefined'){
    req.token = getHeader;
    next();
  }else{
    res.sendStatus(403);
  }
}

jwt.sign(
  {
    data: data
  },
  "secret",
  (err, token) => {
    console.log(token);
  }
)

// memberikan list biodata
app.get('/data', verifikasi, (req, res) => {
  jwt.verify(req.token, "secret", (err, dataAuth) => {
    if(err){
      res.sendStatus(403);
    } else {
      res.json(data)
    }
  })
})


app.use(router);

app.listen(port, () => {
  console.log(`Running on port http://localhost:${port}`);
});

/*
//* npx sequelize init
//? folder config 
digunakan sebagai konfigurasi database mulai membuat nama database hingga pengaturan environment untuk keperluan testing dan mode production/fase deployment

//? folder models
digunakan sebagai model aplikasi yang dimana sebua validasi, perintah query, pengaturan table hingga fitur hools akan di handle oleh folder models.

//?folder migrations
digunakan sebgai konfigurasi untuk keperluan migrasi table ke database.

//?seeders
digunakan untuk keperluan seeding data atau menginput data dengan jumlah yang kita tentukan deldalam table yang ada pada database kita.

//* npx sequelize db:create
untuk membuat database sesuai konfigurasi yang telah dibuat pada file config.json

//! membuat field dalam database using npx sequelize
npx sequelize model:generate --name Photo --attributes title:string,caption:string,image_url:text
//* npx sequelize model:generate --name <nama_table> --attributes <fields>:<tipe-data>, <fields>:<tipe-data>
maka pada folder models akan ada index dan photo
//* migrasi
saat kita menjalankan perintah model:generate untuk membuat table photo, sequelize juga telah mengenerate sebuah file migration khusus utnuk table yang baru saja kita buat yang telah terisi syntax.
terdapat 2 bagian pada migration itu yaitu createTable dan dropTable, dimana pada bagian createTable terdapat berbagai macam field. lalu terdapat field tambahan yang secara langsung otomatis tergenerate oleh sequelize yaitu field id, createAt, updateAt. createAt digunkaan untuk keterangan waktu kapan suatu data terbuat, dan update at digunakan untuk keterangan kapan suatu data terupdate.
nama table akan otomatis berubah menjadi plural.
//? npx sequelize db:migrate

//* npx sequelize seed:generate --name seeding_photo_datas
ini membuat file pada seeder untuk membuat file yang berguna untuk seeding ke database.

//* npx sequelize db:seed --seed <nama-file>
untuk mengirim data yang sudah dibuat pada file seeder kedalam database.
*/