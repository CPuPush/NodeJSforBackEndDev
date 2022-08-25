/*//!Buffer and Stream
buffer adalah suatu tempat yang disediakan data data yang harus
*/
// const buf = Buffer.allocUnsafe(100);

// const len = buf.write('Halo dari kode');

// console.log('Octets written : ' + len);

const buf = Buffer.allocUnsafe(26);
for(let i = 0; i < 26 ; i++){
    buf[i] = i+97
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));
/*
menuliskan dengan start 0 - 5 a - e
*/

