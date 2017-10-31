import http from 'http';

const server = http.createServer().listen(8124);

server.on('request',(req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello world')
})