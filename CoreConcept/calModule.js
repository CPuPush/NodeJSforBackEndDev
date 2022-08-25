// !3 improve module yang sudah ada
const fs = require('fs');

delete fs['readFile'];

fs.readFile = function(str){
    console.log('function baru dari override');
    console.log(str);
}
module.exports = fs;

fs.readFile('code.txt');


// => code diatas
//?dengan cara override
// const calculator = require('./calculator');

// delete calculator['add'];
/**
calculator.add = function(params) {
    // function body
}


teknik overriding dalam oop berguna untuk menimpa atau mengesampingkan object parent. sehingga ketika dipanggil yang keluar adalah child bukan parent.
 */



//!2 Memasukkan module ke dalam function
// const fs = require('fs');
//? memasukkan function ke dalam variabel module / module 
// fs.printMessage = function(str){
//     console.log('pesan dari function baru yang sudah ditambahkan ke dalam module');
//     console.log(str);
// }
//? export langsung
// module.exports = fs;

// fs.printMessage('Sukses')





//!1
// const calculator = require('./calculator');

// let a=13, b=5;
// console.log("Operasi tambah : " + calculator.add(a,b));
// console.log("Operasi kurang : " + calculator.subtract(a,b));
// console.log("Operasi kali : " + calculator.multiply(a,b));