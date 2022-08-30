/*
Latihan menampilkan data menggunakan CommandLine
Teknologi 
1. Nodejs javascript on server side
2. commander.js command-line interfaces made easy
3. cli-table pretty unicode tables for the CLI with Nodejs
4. axios, promise based HTTP client for the browser and nodejs 
5. moment.js parse, validate, manipulate, and display dates and times in js

*/
const program = require('commander');
const models = require('./models/manage')

program
  .version('1.0.0')
  .description('World CUP 2018 Russian');

program
  .command('refresh')
  .alias('r')
  .description('Get newest data from server.')
  .action(() => {
    models.refreshData();
  });

program
  .parse(process.argv)