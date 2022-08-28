/*//! Error Events
ketika terjadi error pada EventEmitter, action(dalam hal ini event) yang biasanya dipanggil, dianggap error. hal ini biasanya terjadi pada kasus tertentu di nodejs. 
//*Ketika EventEmitter tidak memiliki setidaknya 1 listener yang terdaftar untuk error event dan error terpanggil maka event tersebut tersebut akan dibuang dan yang tercetak adalah stack trace dan proses pada nodejs akan keluar
*/
const eventEmitter = require('events');

class myEmit extends eventEmitter{};

const myEventEmit = new myEmit();
/*
untuk menghindari craching, kita dapat menggunaakan listener dengan key error.
*/
myEmit.on('error', err => {
  console.error('Telah terjadi error! silahkan cek kembali')
})
myEventEmit.emit('error', new Error('wanjirrr error dong'));
