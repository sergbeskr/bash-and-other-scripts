var fs         = require('fs')
  , AWS        = require('aws-sdk')
  ;

AWS.config.region = 'xx-xxxx-0';

// aws cloudwatch describe-alarms > allAlarms

var CW = new AWS.CloudWatch()
  , allAlarmsFile  = fs.readFileSync('allAlarms', 'utf8')
  , alarmsJSON = JSON.parse(allAlarmsFile)
  ;

for(var i=0; i<alarmsJSON["MetricAlarms"].length; i++){
  console.log("_____"+i);
  var params = {
            "EvaluationPeriods": alarmsJSON["MetricAlarms"][i]["EvaluationPeriods"], 
            "ComparisonOperator": alarmsJSON["MetricAlarms"][i]["ComparisonOperator"], 
            "AlarmActions": alarmsJSON["MetricAlarms"][i]["AlarmActions"], //
            "Namespace": alarmsJSON["MetricAlarms"][i]["Namespace"], 
            "AlarmDescription": alarmsJSON["MetricAlarms"][i]["AlarmDescription"], 
            "Period": alarmsJSON["MetricAlarms"][i]["Period"], 
            "Threshold": alarmsJSON["MetricAlarms"][i]["Threshold"], 
            "AlarmName": alarmsJSON["MetricAlarms"][i]["AlarmName"], 
            "Dimensions": alarmsJSON["MetricAlarms"][i]["Dimensions"], 
            "Statistic": alarmsJSON["MetricAlarms"][i]["Statistic"], 
            "InsufficientDataActions": alarmsJSON["MetricAlarms"][i]["InsufficientDataActions"],  //
            "OKActions": alarmsJSON["MetricAlarms"][i]["OKActions"],  //
            "ActionsEnabled": alarmsJSON["MetricAlarms"][i]["ActionsEnabled"], 
            "MetricName": alarmsJSON["MetricAlarms"][i]["MetricName"]
  };

  if(alarmsJSON["MetricAlarms"][i]["AlarmActions"] != ""){
      params["AlarmActions"].push("arn:aws:sns:xx-xxxx-0:111111111111:devops");
      params["AlarmActions"].push("arn:aws:sns:xx-xxxx-0:111111111111:admin");
  }
  
  if(alarmsJSON["MetricAlarms"][i]["InsufficientDataActions"] != ""){
      params["InsufficientDataActions"].push("arn:aws:sns:xx-xxxx-0:111111111111:devops");
      params["InsufficientDataActions"].push("arn:aws:sns:xx-xxxx-0:111111111111:admin");
  }
  
  if(alarmsJSON["MetricAlarms"][i]["OKActions"] != ""){
      params["OKActions"].push("arn:aws:sns:xx-xxxx-0:111111111111:devops");
      params["OKActions"].push("arn:aws:sns:xx-xxxx-0:111111111111:admin");
  }
   
  CW.putMetricAlarm(params, function(err, data) {
    if(err){
        //console.log(err, err.stack);
        console.error(err.code, err.message);
        process.exit(1);
    }else{
        console.log(data);
    }     
  });
}
