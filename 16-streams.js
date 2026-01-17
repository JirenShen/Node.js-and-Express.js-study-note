const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt');


const streamTwo = createReadStream('./content/bigFile.txt', {
    highWaterMark: 90000
     //encoding:'utf8'
});


stream.on('data', (chunkResult)=>{
    console.log(chunkResult);
})

streamTwo.on('data', (chunkResult)=>{
    console.log(chunkResult);
})