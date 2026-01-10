const http = require('http');

const server = http.createServer((req, res)=>{ //一个请求就执行一次，这是一个callback函数，
// 每有一个请求就会产生一次调用这个函数，然后res对象就会写东西来处理
    console.log(req);
    if(req.url === '/'){
        res.end('Well come to the home page!');
    }
    else if(req.url === '/about'){
        res.end('Here is the about page.');
    }
    else{
        res.end(` 
        <h1> Oops </h1>
        <p> We can not seem to find this page.</p> 
        <a href="/"> back home </a> `)
    }
    //一个res只能够end一次，所以end完就要return
    
})

server.listen(7001);