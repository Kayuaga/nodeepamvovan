import http from 'http';
import fs from 'fs';


const server = http.createServer().listen(8124);

server.on('request',(req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
})