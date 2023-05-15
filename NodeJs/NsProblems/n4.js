const http = require('http');
const url = require('url');
const fs = require('fs');
const adder = require('./addmod');

http.createServer((req, res) => {
    if(req.url == '/favicon.ico')
    return;
    var q = url.parse(req.url, true);
    var query = q.query;
    var pathname = q.pathname;

    if(pathname == '/'){
        fs.readFile('./simpleAdder.html', (err,data) => {
            if(err){
                res.writeHead(404, {'content-type' : 'text/html'});
                return res.end('404 Resourse Not Found');
            }
            res.writeHead(200, {'content-type' : 'text/html'});
            res.write(data);
            return res.end(); 
        });
    }

    if(pathname == '/add.js'){
        return adder.add(req, res, query);
    }else{
        const fileName = `.${pathname}`;
        fs.readFile(fileName, (err, data) => {
            if(err){
                res.writeHead(404, {
                    'content-type' : 'text/html'
                });
                return res.end('404 Resourse Not Found');
            }
            res.writeHead(200, {
                'content-type' : 'text/html'
            });
            res.write(data);
            return res.end(); 
        });
    }
}).listen(8080);