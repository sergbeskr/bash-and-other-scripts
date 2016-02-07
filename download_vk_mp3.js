var fs = require('fs');
var file = fs.readFileSync("001", {encoding:'utf-8'});
var temp = require('stream');

var adr =  /http.{0,70}mp3/g;

var i=0;
while(temp){
  temp=file.match(adr)[i];
  console.log(temp);
  i++;
}
