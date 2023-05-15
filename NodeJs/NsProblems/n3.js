const http = require('http');
const url = require('url');

http.createServer(function(req, res){

    res.writeHead(200, {
        'content-type' : 'text/html'
    });
    const output = `The requested URL is: ${req.url}`;
    res.write(output);
    res.write('<br>');
    res.end("Hello World!");

}).listen(8080);