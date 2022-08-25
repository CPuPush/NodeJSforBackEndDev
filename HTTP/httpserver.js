/*
membuat http server
build-in module
*/
const http = require('http');

http.createServer(function(req, res) {
    // baris code untu request dan mempersiapkan response
    // http header
    // 200 - ok
    // respon with html content, content-type text/html
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Kode Server sudah berjalan');
    res.end();
}).listen(8080);

/*
untuk memudahkan pembuatan server maka bisa memanfaatkan framework express.
*/