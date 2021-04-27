const fs = require('fs');
const { join } = require('path');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("File is created");
// });

fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), "Hello Node.JS ", err => {
    if (err) throw err;
    console.log("File Written to");
});

fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), "I love node.js", err => {
    if (err) throw err;
    console.log("File Written to");
});

fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`${data} 
    This is text in ${__filename} file
     `);
});

fs.rename(path.join(__dirname, '/test', 'Hello.txt'),
    path.join(__dirname, 'test', 'helloWorld.txt'),
    (err) => {
        if (err) throw err;
        fs.readFile(path.join(__dirname, '/test', 'HelloWorld.txt'), 'utf8', (err, data) => {
            if (err) throw err;
            console.log(`${data} 
            This is text in ${__filename} file `);
        });
    }
);