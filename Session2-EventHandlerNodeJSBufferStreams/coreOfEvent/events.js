// Event pada NodJS
/*
Untuk dapat menulis asynchronous application, kita membutuhkan alat yang dapat mendukung callback pattern. Pada default librarynya nodejs, terdapt module //?EventEmitter yang biasanya digunakan untuk menangani event

Event emitter seperti namanya merupakan sesuatu yang dapat memicu sebuah event terjadi dimana semua dapat mendengarkan event tersebut.

analoginya event emitters seperti orang orang yang baru mendarat di bandara dan menanti supir mereka untuk memanggil nama mereka (event listener). orang orang memiliki nama tersendiri yang keluar dengan nama mereka, supir menanti orang-orang dengan nama tertentu yang ditunjukkan saat orang orang keluar dari bandara. jika orang yang dimaksud sama seperti nama yang supir punya, maka orang tersebut diangkut oleh supir.

contoh berikut menunjukkan EventEmitter sederhana dengan listener tunggal. 
//*Method on() digunakan untuk mendaftarkan listener, sedangkan metode emit() digunakan untuk memicu event
*/

// include module events
const EventEmitter = require('events');

// membuat class dengan extend module events
class myEventEmit extends EventEmitter{}

// membuat objek baru dari class myEventEmit
const myEventEmitter = new myEventEmit();

// membuat listener baru dengan key 'event'
myEventEmitter.on('event', ({str}) => {
  console.log(`Halo inda mayani situmorang, you are my ${str}`);
});

// memanggil llistener yang key-nya 'event'
myEventEmitter.emit('event', {str: 'girlfriend'});

/*//! Mengatur pemanggilan event hanya bisa satu kali
ketika listener terdaftar menggunakan method on(), listener akan dipanggil setiap kali nama event dipanggil menggunakan emit()
//?Dengan menggunakan method once(), kita akan membuat listener hanya dapat dipanggil paling banyak 1 kali apabila nama event dipanggil. setelah event sudah terpanggil sekali, nantinya tidak dapat memanggil event dengannama yang sama sebanyak 2x atau lebih
*/

