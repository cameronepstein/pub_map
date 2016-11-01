var http = require('http');
var fileSystem = require('fs');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fileSystem.readFile('./index.html', null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('Oops! File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

http.createServer(onRequest).listen(8000);
