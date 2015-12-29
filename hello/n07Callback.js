
var ajax = function(callback) {

    // Pretend I/O call here such as http get in 5 second
    setTimeout(function() {
        callback("I'm Done!")
    }, 5000);
    console.log("I will let you know once finished.");
};

// Invoking an API
ajax( function(res) {
   console.log("Result: " + res)
});

console.log("Just waiting...");

