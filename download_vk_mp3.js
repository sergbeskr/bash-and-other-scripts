var fs = require('fs');
var file = fs.readFileSync("001", {encoding:'utf-8'});
var temp = require('stream');
var mp3url = "";

var adr =  /http.{0,70}mp3/g;
//var adr =  /http.\{0,70\}mp3/g;

var i=0;
while(temp){
  temp=file.match(adr)[i];
  if(temp){
    mp3url=String(temp).replace(/\\\\\\/g,"");
    mp3url=String(mp3url).replace(/undefined/g,"");
    console.log(mp3url);
    i++;
  }
}






var fs = require('fs');
var file = fs.readFileSync("001", {encoding:'utf-8'});
var temp = require('stream');
var mp3url = "";
var http = require('http');
var uploadDir = "/usr/games/12345/";
var adr =  /http.{0,70}mp3/g;

var i=0;
while(temp){
  temp=file.match(adr)[i];
  if(temp){
    mp3url=temp;
    mp3url=String(mp3url).replace(/\\\\\\/g,"");
    mp3url=String(mp3url).replace(/https/g,"http");
    console.log(mp3url);
    i++;
    var filedownload = fs.createWriteStream(uploadDir + "vkmusic" + i);
    var request = http.get(mp3url, function (response) {
      response.pipe(filedownload);
    });
  }
}
