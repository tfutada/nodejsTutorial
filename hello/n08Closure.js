
var getClosure = function() {
    var counter = 0;
    return function () {
        return counter++;
    };
};

// Invoking an API
var f = getClosure(); // returns a function along with a counter.
var new_f = getClosure(); // gets another one.

console.log("f():" + f()); // 0
console.log("f():" + f()); // 1

console.log("new_f():" + new_f()); // 0

console.log("f():" + f()); // 2

console.log("new_f():" + new_f()); // 1



