import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:5000';
  private socket;

  constructor() { }

  sendMessage(message, user){
  	this.socket.emit('add-message', {message: message, user: user});
  }

  getMessages(){
  	let observable = new Observable(observer => {
  		this.socket = io(this.url); // set socket
  		this.socket.on('message', data => { // pub when message event happens
  			observer.next(data);
  		})
  		return () => {
  			this.socket.disconnect();
  		}
  	})

  	return observable;
  }

}
