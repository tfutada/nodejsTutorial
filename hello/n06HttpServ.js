var http = require("http")

// Http Server

http.createServer(function(request, response) {
    // Header
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Body
    response.end('Hello World\n');

}).listen(3000); // Listen port

console.log('Running...')


