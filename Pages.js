var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req,res) {
	var q = url.parse(req.url, true);
	var filename = "." +q.pathname;
	fs.readFile(filename, function (err,data){
		if (err) {
			res.writeHead(404, {'content-type' : 'text/html'});
			return res.end('404 not found');
		}
			res.writeHead(200, {'content-type' : 'text/html'});
	res.write(data);
	return res.end();
});
}).listen(PORT);

console.log('server listening on port 8080...')