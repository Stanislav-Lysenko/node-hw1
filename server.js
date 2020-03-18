let http = require('http');
let fs = require('fs');
let addLogs = require('./addLogRequest');


http.createServer((request, response) => {
	response.writeHead(200, {'Content-type': 'text/html'});
	addLogs.addLogRequest(request);
	response.end('Sever works');
}).listen(8081);

