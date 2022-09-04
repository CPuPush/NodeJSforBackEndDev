/*
Query String adalah bagian dari //? URL(Uniform Resource Locator) yang terletak setelah tanda tanya '?'
Query String berfungsi untuk mengirimkan beberapa informasi kecil ke server melalui URL. Informasi biasanya digunakan sebagai parameter untuk query database untuk mungkin untuk menyaring sebuah hasil.
contoh 
//* https://hac/?page=5&limit=6

query para,eters adalah sebuah pasangan nilai kunci seperti page dan limit dengan nilai masing masing 5&6, hal seperti ini adalah kasus yang cukup untuk di Express, dan server HTTP apapun. mari kita bahas contoh diatas
kita akan mengekstrak parameter page dan limit sehingga kita tau path mana yang nantinya akan dikempalikan ke halaman yang diminta client. Meskipun query parameters biasanya digunakan untuk permintaan GET, amaka akan mungkin untuk menggunakan paramter POST dan DELETE. 

Query parameters dapat diambil dari objek query pada reequest object yang nantinya dikirim ke rute / path kita. Itu dalam bentuk objek dimana kita dapat langsung mengakses query parameters yang kita butuhkan. Dalam hal ini, Express menangani semua penguraian URL untuk kita dan menampilkan parameter yang diambil sebagai objek ini. 
Contohnya adalha sebagai berikut.
*/
const express = request('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const article = require('./models').Article;

let app = express();
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// function to handle the root path
app.get('/', async(req, res) => {
  // access the provided page and limit query parameters
  let page = req.query.page;
  let limit = req.query.limit;

  let articles = await Article.findAll()
    .paginate({page: page, limit: limit})
    .exec();
  
    // return the articles to the rendering engine
    res.render('index', {
      articles: articles
    })
});
/*
constoh dari atas, kita menganggap page dan limit selalu ada. Jika tidak ada salah satu dari parameter tersebut ada dalam URL, maka kita akan menerima undefined untuk kedua parameter page dan limit.
contoh kali ini adalah dengan menggunakan package dari querystring dan URL.
const url = require('url');

*/





/*
POST PARAMETER

Post query paramters dikirim oleh cloent HTTP misalnya dengan forms atau ketika kita melakukan permintaan pengiriman data POST (request)
jika data dikirim sebagai JSON, menggunakan Content-Type: application/json, kita akan menggunakan middleware //? express.json()

jika data dikirim dengan menggunakan Content-Type: application/x-www-form-urlencoded, kita akan menggunakan middleware //? express.urlencoded()

dalam kedua kasus kita dapat mengakses name didalam json dengan merujuknya dari //? request.body.
*/