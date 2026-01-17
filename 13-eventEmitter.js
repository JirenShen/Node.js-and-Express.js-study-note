const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('BuyShirt', (person, price)=>{
    console.log(`the person buying shirt is ${person} in a price of ${price} usd.` );
}) //listen on this event.


customEmitter.on('BuyShirt', (person, price)=>{
    console.log(`second method also will be applied.` );
})


customEmitter.emit("BuyShirt", 'Ben', 100); //listen first, and then you can emit.

 
//----------------------------------------------------------------------------------
const EventEmitter = require('events');

class UserTask extends EventEmitter {
    complete(taskName) {
        console.log(`任务 "${taskName}" 已完成！`);
        // 触发自定义事件
        this.emit('done', taskName);
    }
}

const task = new UserTask();

// 监听任务完成事件
task.on('done', (name) => {
    console.log(`通知：用户已经完成了任务：${name}`);
});

task.complete('学习 Node.js');