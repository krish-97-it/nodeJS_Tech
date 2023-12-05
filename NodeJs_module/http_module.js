var http    =   require('http');

//create a server object using createServer method:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}, {'X-Foo':'bar'});
    res.write('Hello World!'); //write a response to the client
    res.write(req.url); //req argument that represents the request from the client
    res.end(); //end the response
    // res.setHeader('Content-Type', 'text/html');
    // res.setHeader('X-Foo', 'bar');
    // res.end('ok');
}).listen(8080); //the server object listens on port 8080