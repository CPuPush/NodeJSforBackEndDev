const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/index.html', (req, res) =>{
    res.sendFile(__dirname + "/" +"index.html")
});

app.post('/user', (req, res) => {
    let response = {
        firstname : req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        // mengganti query with body because we have middleware bodyParser to handle it

        // firstname : req.query.firstname,
        // lastname: req.query.lastname,
        // gender: req.query.gender,
    }

    console.log(response);

    res.end(JSON.stringify(response));

});
const server = app.listen(8080, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`listening at : http://${host} ${port}`);
})










/*//? res.sendFile function basically transfer the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension
//*res.sendFile(path [, options] [, fn])

app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }
        res.sendFile(fileName, options, (err)=>{
            if(err){
                next(err);
            }else {
                console.log('sent: ', fileName);
            }
        })
});

//!body parser
body-parseer extract the entire bodu portion of an incoming request stream and exposes it on req.body not req.query or something
the middleware was a part of express earlier but now you have to install separately.
this body-parser module parses module parser the JSON, buffer, string and URL encoded data submitted using //?HTTP POST request
*/