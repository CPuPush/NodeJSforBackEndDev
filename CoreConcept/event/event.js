/**
Untuk menuliskan async kita butuh menuliskan 1 tools yang mendukung untuk menyalakkan callback pattern. 
ketika teriak atau event lain atau part lain yang behubungan sama dia, maka bisa merespon 
//? analogy
bayangkan ketika lagi dibandara ada orang dan ada driver untuk menjemput,
orang tersebut membawa package yaitu nama, dan driver tersebut menuliskan papan dengan nama pelanggan tersebut. semua orang pasti bisa melihat, tetapi yang merespon adalah orang tersebut
 */
const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {}
class Food{}
let myDog = new Dog();

myDog.on("chew", item => {
    if (item instanceof Food){
        console.log('Good Dog');
    }else{
        console.log(`Time to buy another ${item}`);
    }
});

myDog.emit('chew', "shoe");
const bone = new Food()
myDog.emit('chew', bone);
