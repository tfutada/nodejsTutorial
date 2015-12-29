var http = require('http');

var server = {
    host: 'localhost',
    port: '8081',
    path: '/'
};

// make an HTTP request
http.request(server, function(response) {
    // receive the response
    response.on('data', function(data) {
        console.log(data.toString())
    });

    response.on('end', function() {
        console.log("Done.")
    });

}).end();

