/*
saat ini kita akan menampilkan 1 buah event dengan listener yang menggunakan key 'connection'. untuk menghitung jumlah listener kita bisa menggunakan fungsi //?listenerCount() yang terdapat pada module events
*/
const eventEmitter = require('events');

class myEmitter extends eventEmitter{};

const myEmit = new myEmitter;

// listener #1
let listener1 = () => {
  console.log('listener 1 has been declared');
};

// listener 2
let listener2 = () => {
  console.log('listener 2 has been declared');
};

// hubungkan listener 1 dengan key 'connection'
myEmit.on('connection', listener1);

// hubungkan listener 2 dengan key 'connection'
myEmit.on('connection', listener2);

// panggil listenerCount yang ada pada modul eventEmitter 
// listenerCount(namaEmitter, 'key');
let eventCount = eventEmitter.listenerCount(myEmit, 'connection');

// lihat berapa jumlah listener yang berhubungan dengan key 'connection'
console.log(eventCount + ' Listener(s) yang berhubungan dengan key connection');

// memanggil key connection dan menampilkan 2 event yang berhubungan yaitu listener 1 dan listener 2
myEmit.emit('connection')

/*//?eventEmitter.listenerCount
why should call eventEmitter, 
eventEmitter has several function in body class, one of them is listenerCount
*/