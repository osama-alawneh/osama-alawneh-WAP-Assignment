exports.add = function(req,res,value){
    res.writeHead(200, {
        'content-type' : 'text/html'
    }); 
    res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    </head>
    <body>
    <p>The sum is: ${value}</p>
    <form action="/">
        <button type = "submit">
            Go Back
        </button>
    </form>
    </body>
    </html> ` );
return res.end();
};