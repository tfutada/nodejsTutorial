var express = require('express');
var app = express();

// GET
app.get('/', function(req, res) {
    res.send('Hello Express');
});

var server = app.listen(3000, function() {
    console.log("Express HTTP Server is running at " + server.address().port)
});


