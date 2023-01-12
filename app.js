const fs = require('fs');
fs.writeFileSync('hello.txt','Hello Node.js App!');
fs.writeFileSync('data.txt','Name: ');
fs.appendFileSync('data.txt','Siripassorn');