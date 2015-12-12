var http = require("http");

var num_requsts = 0;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("May the force be with you...");
  num_requsts++;
  response.write(String(num_requsts));
  response.end();
}).listen(80);

console.log('server started');

//node sample_requests_counter.js
