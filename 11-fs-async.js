const {readFile, writeFile} = require("fs");
console.log("Start");

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `result: ${first} \n ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("done", result); //这里writeFile的result通常为undefined，接下来打印的是undefined是正常的
        })
    })
}) 
//这个函数有这样一个callback function，就是完成读取后，无论成果还是失败，都会调用第三个参数的这个函数，并且错误优先，如果有错误传入第一个err
//的就是一个Error对象，否则就是none/undefined。
console.log("Starting next task"); 


// 导入 Promise 版本的 fs 函数
const { readFile, writeFile } = require('fs').promises;

// 将操作包裹在一个 async 函数中
async function processFiles() {
  try {
    // 使用 await 等待文件读取完成，结果直接赋给变量
    const first = await readFile('./content/first.txt', 'utf8');
    console.log('读取 first.txt 完成');

    const second = await readFile('./content/second.txt', 'utf8');
    console.log('读取 second.txt 完成');


    // 使用 await 等待写入操作完成
    await writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`);
    console.log('done');

  } catch (err) {
    console.error('发生错误:', err);
  }
}

// 调用异步函数开始执行
processFiles();
