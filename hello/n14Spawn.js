var exec = require('child_process').exec;

var cps;
cps = exec('ls', function (err, stdout, stderr) {

    if (err) {
        console.error(err.stack)
    }

    console.log("From child:\n%s", stdout)
});

cps.on('exit', function (code) {
    console.log('=== The child process is done: %s', code)
});





