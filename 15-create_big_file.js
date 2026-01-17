const { createWriteStream } = require('fs');

function writeWithStream() {
    const stream = createWriteStream('./content/bigFile.txt');

    for (let i = 0; i < 10000; i++) {
        stream.write(`This is a big file, line ${i}\n`);
    }

    stream.end(); // 标记写入结束
    
    stream.on('finish', () => {
        console.log('通过 Stream 写入完毕！');
    });
}

writeWithStream();