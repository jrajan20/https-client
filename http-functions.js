

module.exports = function getHTML (options, callback) {
    /* Your code here */
    var https = require('https'); 
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

};

