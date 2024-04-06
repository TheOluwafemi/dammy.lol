const http = require('http');

http.createServer(function(req, res) {
	res.write("On the way to be a full snack engineer by the end of the year, update!!");
	res.end();
}	

).listen(3000);

console.log("Server started on port 3000");

