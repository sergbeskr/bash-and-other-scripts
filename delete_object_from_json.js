var npmJson = require('/opt/jenkins/jobs/nodebb-rpm/workspace/NodeBB-0.9.3/npm-shrinkwrap.json')
    fs  = require('fs').
    ;

delete npmJson["dependencies"]["utf-8-validate"];
delete npmJson["dependencies"]["bufferutil"];

fs.writeFileSync("/opt/jenkins/jobs/nodebb-rpm/workspace/NodeBB-0.9.3/npm-shrinkwrap.json", JSON.stringify(npmJson, null, 2));

console.log("detete utf-8-validate and bufferutil from npm-shrinkwrap.json")
