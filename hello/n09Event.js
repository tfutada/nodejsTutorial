var events = require('events');

// Create an eventEmitter object
var emitter = new events.EventEmitter();

var ajax = function(callback) {
    // register an event with the callback
    emitter.on("ajax", callback);

    // Pretend I/O call here such as http get in 5 second
    setTimeout(function() {
        // fire up the event ajax
        emitter.emit("ajax", "I'm Done!")
    }, 5000);
    console.log("I will let you know once finished.");
};

// Invoking an API
ajax( function(res) {
   console.log("Result: " + res)
});

console.log("Just waiting...");

