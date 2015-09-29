
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var votes = {
	'lamasticot': 0,
	'troll': 0
};


io.on('connection', function(socket){
	socket.emit('message', 'welcome');

	console.log('user connected');
	socket.on('choice', function(what){
	console.log('chosen:' + what);
		if (what === 'lamasticot'){
			votes['lamasticot']++;
		}else{
			votes['troll']++;
		}
		console.log(votes);
	});
});


http.listen(3000, function(){
	console.log('listeninggs on *:3000');
});