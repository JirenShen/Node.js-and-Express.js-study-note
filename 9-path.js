const path = require("path");
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); //搭配dirname来使用
console.log(absolute);
