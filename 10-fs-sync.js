// const fs = require("fs");
// console.log(fs);

const {readFileSync, writeFileSync} = require("fs"); //这是用来找到属性的key，会把fs.readFileSync的值给第一个
//console.log(readFileSync);

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt', `here is the sync result: ${first} ${second} \n`, {flag:'a'});


