const http = require('http');

http.createServer((request, response) => {
    response.write('hola mundo');
    response.end();
}).listen(8080);

console.log('escuchando en el puerto:', 8080);