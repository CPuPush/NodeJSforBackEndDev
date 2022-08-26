const express = require('express');
const app = express();

app.use('/kode',function(req, res, next){
    console.log("START");
    console.log("request ke kode sudah diterima pada " + Date.now());
    next();
}); 

app.get('/kode', (req, res, next) => {
    res.send('KODE MIDDLE');
    next();
});

app.use('/kode', function(req, res){
    console.log('END');
    
});

app.listen(8080)







/*
basic dari middelware adalah harus bisa menjalankan beberapa task 
1. execution
2. perubahan dalam req res
3. mengakhiri
*/