var express = require('express');
var app = express();
var os = require('os');

var networkInterfaces = os.networkInterfaces();

app.get('/', function (req, res) {
	res.send(networkInterfaces+'\n');
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
