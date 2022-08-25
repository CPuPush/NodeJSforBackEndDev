const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    console.log('Mendapatkan GET dari homepage');
    res.send('Hello World')
});
app.post('/', (req, res)=>{
    console.log('Mendapat POST dari homepage');
    res.send('Halo POST');
});

app.get('/list_user',(req, res) => { 
    console.log('Mendapatkan GET dari list user');
    res.send('Halo GET dari list user');
    
})
app.get('/ko*de',(req, res) => { 
    console.log('Mendapatkan GET dari /ko*de');
    res.send('Halo GET match');

})

let server = app.listen(PORT, ()=>{
    // console.log(`listening on http://localhost:${PORT}`);
    let host = server.address().address
    let port = server.address().port

    console.log(`basic routing listening pada port: ${host}, ${port}`);
});


/*
body-parser adalah middleware untuk handle json raw-x dll. 

cookie-parser adalah 

multer adalah middleware dari nodejs untuk menghandle data.
*/