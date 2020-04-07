const http = require('http');
// const url = require('url');

const server = http.createServer(function(request, response) {
    if (request.url == '/goodbye') {
        response.writeHead(200);
        response.end('goodbye');
    } else if (request.url == '/error') {
        response.end('HTTP/1.1 500 Internal Server Error');
    } else
        response.writeHead(200);
    response.end('Hello World');
});


server.listen(3000);

console.log('Server address: http://localhost:3000');