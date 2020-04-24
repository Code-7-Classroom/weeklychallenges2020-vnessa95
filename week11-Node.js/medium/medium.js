var fs = require('fs');

function readData(err, data) {
    console.log(data);
}

fs.readFile('medium.txt', 'utf8', readData);

// It takes three parameters as arguments, the first parameter is the file name.
// The second argument is the “encoding scheme” for my file and the third argument is an anonymous callback function, that will execute when the file read operation finishes.