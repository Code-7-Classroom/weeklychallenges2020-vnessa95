// Create a file named my-first-async-io.js.  
   
// Write a program that uses a single asynchronous filesystem operation to  
// read a file and print the number of newlines it contains to the console  
// (stdout), similar to running cat file | wc -l.  


//HINT
// The solution to this problem is almost the same as the previous problem  
//   except you must now do it the Node.js way: asynchronous.  
   
//   Instead of fs.readFileSync() you will want to use fs.readFile() and  
//   instead of using the return value of this method you need to collect the  
//   value from a callback function that you pass in as the second argument. To  
//   learn more about callbacks, check out:  
//   (https://github.com/maxogden/art-of-node#callbacks).  
   
//   Remember that idiomatic Node.js callbacks normally have the signature:  
   
//      function callback (err, data) { /* ... */ }  
   
//   so you can check if an error occurred by checking whether the first  
//   argument is truthy. If there is no error, you should have your Buffer  
//   object as the second argument. As with readFile(), you can supply 'utf8'  
//   as the second argument and put the callback as the third argument and you  
//   will get a String instead of a Buffer.  
   
//   Documentation on the fs module can be found by pointing your browser here:  
//   file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/fs.html 


// MY SOLUTION
// var fs = require('fs');
// var pathToFile = process.argv[2];

// var bufferString, bufferStringSplit;

// function counter(callback) {
//   fs.readFile(pathToFile, function (err, data) {
//     bufferString = data.toString(); 
//     bufferStringSplit = bufferString.split('\n'); 
//     callback();
//   });
// }

// function logMyNumber() {
//   console.log(bufferStringSplit.length-1);
// }

// counter(logMyNumber);


//CORRECT SOLUTION
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})