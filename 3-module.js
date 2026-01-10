console.log(__dirname);
console.log(process);

let count = 0;
const intervalID = setInterval(()=>{
    count++;
    console.log("exec time:", count);
    if(count>5){
        clearInterval(intervalID); // 停止执行
    }
}, 1000);

//()=>{} 这是一个函数定义，左边括号里面是写函数参数，{}内部写定义。

const names = require("./4-names");
console.log(names);

const SayHi = require("./5-name_func.js");
SayHi("Susan");
SayHi(names.john);


const data = require("./6-another_way");
console.log(data);

require('./7-mind_bomb');