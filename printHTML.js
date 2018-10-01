
var https = require('https');  

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
   https.get(requestOptions, function (response) {
   response.setEncoding('utf8');

  var callback = function(response) {
  
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    var buffer = new Buffer(chunk);
    console.log(buffer.toString() , '\n');

   });

}
https.request(requestOptions, callback).end();
})

}
console.log(getAndPrintHTML());