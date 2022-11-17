const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/todos');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(routes);
app.set("view engine", "ejs");
app.set("views", "src/views/pages");
app.use("/static", express.static(`${__dirname}/public`));
app.listen(3000, () => {
  console.log(`listening at http://localhost:3000`);
});


/* //! RESTFUL API
REST merupakan singkatan dari //?Representational State Transfer.
Secara singkat REST adalah cara kita untuk menggunakan resource(fungsi/method) yang ada di sebuah server dengan mengakses URL yang telah disediakan.

care mengaksesnya tentu dengan menggunakan http(Hyper Text transfer protocol) verb yang digunakan yaitu :
//* GET, untuk membaca resoure (Data)
//* POST, untuk membuat resouve baru (data baru).
//* DELETE, tentu untuk menghapus resource (data).
//* PUT, Untuk merubah resource (data).

dan yang perlu diingat bahwa REST ini adalah stateless, artinya tidak ada state didalamnya. misalnya tidak ada penggunaan session. karena sifatnya, client hanya meminta ke server dan server akan memberikan responsenya. sehingga untuk proses otentikasinya, kita tidak dapat menggunakan session.

why we need rest api?
pertama harus ada sebuah rest server yang akan menyediakan resource/data. Sebuah REST client akan membuat HTTP request ke server melalui sebuah global ID atau URIs dan server akan merespon dengan mengirimkanbalik sebuah HTTP response sesuai yang diminta client.

Komponen Rest API
//* HTTP method seperti get post put delete sesuai dengan tugasnya masing-masing.
//* URI(Uniform Resource Identifier) untuk mengetahui lokasi data di server,
//* HTTP Version, seperti HTTP v1.1
//* Request Header, berisi metadata seperti Authorization, tipe client dan lain
//* Request Body, data yang diberikan client ke server seperti URI params

//?REST API RESPONSE COMPONENT
//* Response Codem, status server terhadap request yang diminta seperti 200, 401, 404, 500 dll
//* HTTP Versionee
//* Response Header yang berisi meta data seperti contect type, cache tag dan yang lainya
//* Response Body, data/resource yang diberikan oleh server baik itu berupa text, json ataupun xml.

ada 6 batasam panduan yang mendefinisikan arsitektur REST, yaitu:
//* Uniform Interface: Antarmuka komponen harus sama. Ini berarti menggunakan sekitar URI(uniform resouce identifier) untuk mengidentifikasi sumber daya dengan kata lain, path yang dapat dimasukkan ke bilah kolasi browser.

//* Client-Server: ada pemisahan kekhawatiran antar server, yang menyimpan dan memanipulasi data, dan klien, yang meminta da menampilkan respon.

//* Stateless Interactions: Semua informasi tentang setiap permintaan terkandung dalam setiap permintaan individu dan tidak tergantung pada status session.

//* Cacheable: Klien dan server dapat menyimpan submer daya.

//* Layered System: Klient dapat dihubungkan ke server akhir, atau lapisan menengah seperti load-balancer.

//* Code on Demand(Optional): Seorang klien dapat mengunduk kode, yang mengurangi visibilitas dari luar.

KODE RESPON
GET => 200 (OK)
POST => 201(created)
PUT => 200(OK)
DELETE => 200(OK), 202(Accepted), or 204(No Content)
*/