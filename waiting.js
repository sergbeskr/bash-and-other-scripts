var reqRetries = 100
  , reqDelay   = 30000
  ;

console.log('Waiting from sea weather...\n')

runningDelay();
function runningDelay(){
      if (reqRetries--) {
           setTimeout( runningDelay, reqDelay );
           console.log('\none more...\n', reqRetries)
      }
}
