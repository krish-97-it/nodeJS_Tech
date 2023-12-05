var http = require('http'); // to include http module use require // built-in module

var date_time   =   require('./NodeJs_module/my_module')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + date_time.myDateTime());
  res.end('Hello World from Krishnendu!');
//   res.end();
}).listen(8080);