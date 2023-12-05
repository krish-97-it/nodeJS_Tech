var http    = require('http');
var fs      = require('fs');
var url     = require('url');

//appendfile function can create a new file with some content, if file already exists it only add content after the existing content of the file
fs.appendFile('demo.txt','Hello Papai!!', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
});

//open a new file and state that file is opened to write something. if file is not exists, then a new empty file will be created
fs.open('demo1.txt', 'w', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
});

//it replace a file and its content. if file does not exists new file will be created
fs.writeFile('demo.txt', 'Hello Papai!!', function(err){
    if(err){
        throw err;
    }else{
        console.log('saved');
    }
})

// // it replace a file name
// fs.rename('demo1.txt', 'demo_new.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });


//To delete a file
// fs.unlink('demo.txt', function(err){
//     if(err) throw err;
//     console.log('File Deleted!');
// });

// http.createServer(function(request,response){
//     fs.readFile('demo_new.txt',function(err, data){
//         response.writeHead(200, {'content-type': 'text/html'});
//         response.write(data);
//         response.end();
//     });
// }).listen(8080);

// The above example show how to open a file request by a client i.e - http://localhost:8080/summer.html
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    }
    return res.end();
  });
}).listen(8080);
