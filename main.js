//const fs = require('fs'); this method uses outdated commonJS
//you could use 'destructuring' to just get the methods you need: import {readFileSync} from "fs";
import fs from "fs";
const content = fs.readFileSync("test.txt",
    //, 'utf-8',
    //    (err, data) => {
    //        if (err) { throw err };
    // content = data; 

    //  } this error capture is unnecessary when using readFileSync
);


//use toString() to convert the 'buffer' type that the content currently is, into a string
//alternatively you can use readFileSync with the 'utf-8' argument to read it directly into a string. But you have to know that the file is in utf-8

//count how many total emails there are:
console.log("all email addresses i.e. appearance of @: " + content.toString().match(/@/g).length);

//count how many softwire.com email addresses are in this list
const softwireRegex = /[a-z0-9]+@softwire.com\b/gi

console.log("@softwire.com appearances: " + content.toString().match(softwireRegex).length);
console.log("All softwire emails caught so far: " + content.toString().match(softwireRegex));


//approaching email extraction without using regex: 




