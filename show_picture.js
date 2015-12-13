var http = require("http"),
    fs = require("fs");

//var num_requsts = 0;

http.createServer(function(request, response) {
 // response.writeHead(200, {"Content-Type": "text/plain"});
 // response.write("May the force be with you...");
 // num_requsts++;
 // response.write(String(num_requsts));
  fs.readFile("D:/sergbeskr/devops/sergbeskr_001.jpg", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
	  response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
	  response.end();
    }
  });
}).listen(80);

console.log('server started');
