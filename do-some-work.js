
var x = require('q-io/http');

x.read("http://localhost:7000")
.then(function (id) {
return x.read("http://localhost:7001/"+id);
})
.then(function (json) {
console.log(JSON.parse(json))})
.done();