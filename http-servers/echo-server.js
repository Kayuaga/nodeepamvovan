import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    req.pipe(res);
}).listen(8124);



