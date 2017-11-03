# Angular/SocketIO Chat Example

## Install
Server:
```
cd ng-chat/chat-db
npm install
npm start
```
Client:
```
cd ng-chat
npm install
ng serve -o
```

## About
This is a very basic chat demo following the examples [here](https://socket.io/) and [here](http://www.syntaxsuccess.com/viewarticle/socket.io-with-rxjs-in-angular-2.0).

The server does nothing more than open a socket that can recieve a message and emit the message. It does not save messages or user data.

The Angular client has a component with a form to write and submit messages. Messages can be emited to the server.
A service is used to create an observable that publishes when the socket receives a new message. Messages are saved in a client array.

This example allows all users connected to send and receive messages. However, a messaging feature might just have private messages between two users. This can be done like this:

```
io.on('connect', socket => {
  socket.to(<socketid>).emit('hey', 'I just met you');
}
```
