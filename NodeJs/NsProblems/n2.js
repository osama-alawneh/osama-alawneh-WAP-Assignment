const http = require('http');
const myDate = require('./myModule');
http.createServer(function(req, res){

    res.writeHead(200, {
        'content-type' : 'text/html'
    });
    res.write('Hello World!');
    res.write('<br>')
    res.write(myDate.myDate().toString());
    res.end();

}).listen(8080);