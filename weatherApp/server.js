const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
require('dotenv').config();

// API
const API_key = process.env.API_key;

const PORT = 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {weather: null, error:null})
});
app.post('/', (req, res) => {
    let city = req.body.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    
    request(url, (err, response, body) => {
        if(err){
            res.render('index', {weather: null, error: 'Error, Please try again'})
        }else{
            let weather = JSON.parse(body);
            if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, Please try again'})
            }else{
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name} !`
                res.render('index', {weather:weatherText, error: null});
            }
        }
    });
})

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})