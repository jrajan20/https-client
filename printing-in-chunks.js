var https = require('https');     

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
   response.setEncoding('utf8');

  var callback = function(response) {
  
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString() , '\n');

   });

}
https.request(requestOptions, callback).end();
})
}

console.log(getAndPrintHTMLChunks())
