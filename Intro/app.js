const http = require('http');
// membuat server baru menggunakan fungsi createServer yang terdapat pada http
http.createServer((req, res) => {
    res.write('Hello World');
    // mengakhiri response
    res.end();
}).listen(5000);