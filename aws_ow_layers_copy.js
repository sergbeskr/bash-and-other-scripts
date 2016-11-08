var fs         = require('fs')
  , AWS        = require('aws-sdk')
  ;

AWS.config.region = 'xx-xxxx-0';

//   aws opsworks describe-layers --stack-id xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx > stg_layers

var OW = new AWS.OpsWorks()
  , allLayersFile  = fs.readFileSync('stg_layers', 'utf8')
  , layersJSON = JSON.parse(allLayersFile)
  ;

for(var i=0; i<layersJSON["Layers"].length; i++){
  console.log("_____"+i);
  var params = {
            "StackId": "oooooo-oooo-oooo-oooo-oooooooooo", 
            "LifecycleEventConfiguration": layersJSON["Layers"][i]["LifecycleEventConfiguration"], 
            "Packages": layersJSON["Layers"][i]["Packages"], 
            "Name": layersJSON["Layers"][i]["Name"], 
            "CustomRecipes": layersJSON["Layers"][i]["CustomRecipes"], 
            "CustomSecurityGroupIds": layersJSON["Layers"][i]["CustomSecurityGroupIds"], 
            "VolumeConfigurations": layersJSON["Layers"][i]["VolumeConfigurations"], 
            "AutoAssignElasticIps": layersJSON["Layers"][i]["AutoAssignElasticIps"], 
            "EnableAutoHealing": layersJSON["Layers"][i]["EnableAutoHealing"], 
            "AutoAssignPublicIps": layersJSON["Layers"][i]["AutoAssignPublicIps"], 
            "UseEbsOptimizedInstances": layersJSON["Layers"][i]["UseEbsOptimizedInstances"],  
            "Attributes": layersJSON["Layers"][i]["Attributes"],  
            "Shortname": layersJSON["Layers"][i]["Shortname"], 
            "Type": layersJSON["Layers"][i]["Type"]
  };
   
  OW.createLayer(params, function(err, data) {
    if(err){
        //console.log(err, err.stack);
        console.error(err.code, err.message);
        process.exit(1);
    }else{
        console.log(data);
    }     
  }); 
}
