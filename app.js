var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function(socket){
	LOG('new connection made');

	socket.emit('message-from-server', {
		greeting: 'Hello from Server'
	});

	socket.on('message-from-client', function(msg){
		LOG(msg.greeting;
	});
});

server.listen(port, function(){
	LOG('Listening on port ' + port);
});

function LOG(logMsg){

    console.log('[' + new Date().toLocaleTimeString() + '] ' + logMsg);
}