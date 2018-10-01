var https = require('https'); 

function getHTML(options, callback) {

  /* Add your code here */
  https.get(options, function (response) {
   response.setEncoding('utf8');

  var callback2 = function(response) {
  
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    var buffer = new Buffer(chunk);
    //console.log(buffer.toString() , '\n');
    callback(buffer.toString());

   });

}
https.request(options, callback2).end();
});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions,printHTML));

