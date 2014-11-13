var http = require('http');

http.createServer(function (req, res) {
    var name = 'world';
    console.log("Hello World " +req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h2>Hello, ' + name + '!</h2> [iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT);  