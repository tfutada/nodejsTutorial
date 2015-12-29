
var fs = require('fs');
var buf = Buffer(256);

// open a file as read-only
fs.open('test.txt', 'r+', function (err, fd) {

    if (err) { return console.error('File open err!' + err) }

    fs.read(fd, buf, 0, buf.length, 0, function(err, len) {

        if (err) { console.error('File read err!' + err) }

        if (len > 0) { console.log("read:" + buf.slice(0, len).toString()) }

        fs.close(fd, function(err) {
            if (err) { console.error('File close err!' + err) }
        })
    })
});


