
var str = Buffer('abcdefg');

console.log(str.length); // 7
console.log(str.slice(4,7).toString()); // efg
console.log(str.toJSON()); // efg

