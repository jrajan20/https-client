var https = require('https');  

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {
   response.setEncoding('utf8');

  var callback = function(response) {
  
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    var buffer = new Buffer(chunk);
    console.log(buffer.toString() , '\n');

   });

}
https.request(options, callback).end();
});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));

