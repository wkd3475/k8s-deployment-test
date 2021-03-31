var express = require('express');
var app = express();
var ip = require('ip');

app.get('/', function (req, res) {
	res.send(ip.address());
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
