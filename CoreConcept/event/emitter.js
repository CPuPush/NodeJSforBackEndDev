const EventEmitter = require('events');
class myEmitter extends EventEmitter {}

let emitter = new myEmitter();
emitter
    .on("message", function() {
        console.log('no satu');
    })
    .on("message", function() {
        console.log('no dua, bukan pesan yang benar');
    })
    .on('message', function() {
        console.log('pesan untuk data');
    });

console.log(emitter.eventNames());
emitter.removeAllListeners('message')
console.log(emitter.eventNames());