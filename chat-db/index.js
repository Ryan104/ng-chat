let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('add-message', message => {
    io.emit('message', {type:'new-message', text: message.message, user: message.user}); // front end listening for 'message' event
  });
});


http.listen(5000, () => {
  console.log('started on port 5000');
});