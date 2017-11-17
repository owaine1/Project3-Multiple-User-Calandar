// ***** Events https://www.youtube.com/watch?v=XOWDV9gDJ84

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var ringbell = function(){ // C
//     console.log('Ring ring ring');
// eventEmitter.emit('bellrings', 'Welcome'); //(D)
// }
// eventEmitter.on('doorOpen', ringbell ); // B
// eventEmitter.on('bellrings', function(message){ // E
//     console.log(message);
// })
// eventEmitter.emit('doorOpen'); // A

// *****

// ***** Fs module https://www.youtube.com/watch?v=GdBgP71CSow4

// var fs = require('fs');
// // this is an asynchronous 'read'
// fs.readFile('ZZZ debugging.txt', function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Asynchronous data is ' + data.toString());
//         console.log('This is the asynchronous end');
//     }
// });
// // this is a synchronous 'read'
// var data = fs.readFileSync('ZZZ debugging.txt');
// console.log('Synchronous data is ' + data.toString());
// console.log('This is the synchronous end');

// *****
// Callbacks https://www.youtube.com/watch?v=ui4-OADfgIk
console.log('User 1 makes a request');
setTimeout(callback, 5000);

console.log('User 2 makes a request');
setTimeout(callback, 5000);

console.log('User 3 makes a request');
setTimeout(callback, 5000);

function callback() {
    console.log('Queried the database and delivered data in 5 seconds')

}
//*****
// https://www.youtube.com/watch?v=wtIvu085uU0 his building a MEAN stack app from scratch (got to 27:17)
