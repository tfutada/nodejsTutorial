var http = require('http');
var socket = require('socket.io');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    res.writeHead(200);
    res.end(fs.readFileSync('test.html'));

}).listen(3000, function () {
    console.log('Server running...');
});

socket.listen(server).on('connection', function (socket) {
    socket.broadcast.emit('channel', {name: 'Futada'});
});

