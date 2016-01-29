var npmJson = require('/var/www/nodebbv0.9.3_2/npm-shrinkwrap.json')
    fs  = require('fs').
    ;

delete npmJson["dependencies"]["utf-8-validate"];
delete npmJson["dependencies"]["bufferutil"];

fs.writeFileSync("/var/www/nodebbv0.9.3_2/npm-shrinkwrap.json", JSON.stringify(npmJson, null, 2));

console.log("detete utf-8-validate and bufferutil from npm-shrinkwrap.json")
